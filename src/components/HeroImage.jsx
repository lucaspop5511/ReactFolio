import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import '/src/styles/HeroImage.css';

function HeroImage() {
    const sketchRef = useRef();
    const p5Instance = useRef(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const initializeSketch = () => {
        if (p5Instance.current) {
            p5Instance.current.remove();
        }

        p5Instance.current = new p5((p) => {
            let gridTopX, gridTopY;
            const sideLength = 35;
            const cubes = [];

            function generateCubes() {
                cubes.length = 0;
                cubes.push(new Cube(0, 0, 0));

                while (cubes.length < 50) {
                    addRandomCube();
                }

                cubes.sort((a, b) => a.getSortString().localeCompare(b.getSortString()));
                centerShape();
            }

            function centerShape() {
                const minX = Math.min(...cubes.map(cube => cube.getProjectedX()));
                const maxX = Math.max(...cubes.map(cube => cube.getProjectedX()));
                const minY = Math.min(...cubes.map(cube => cube.getProjectedY()));
                const maxY = Math.max(...cubes.map(cube => cube.getProjectedY()));

                const offsetX = gridTopX - (minX + maxX) / 2;
                const offsetY = gridTopY - (minY + maxY) / 2;

                cubes.forEach(cube => cube.applyOffset(offsetX, offsetY));
            }

            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, 400).parent(sketchRef.current);
                gridTopX = p.width / 2;
                gridTopY = p.height / 2;
                p.strokeWeight(2);

                generateCubes();
                canvas.mouseClicked(() => initializeSketch());
            };

            p.draw = () => {
                p.background(206, 214, 217);

                for (const cube of cubes) {
                    cube.draw();
                }
            };

            function addRandomCube() {
                let cubeAdded = false;

                while (!cubeAdded) {
                    const randomCube = p.random(cubes);
                    let newCubeC = randomCube.c;
                    let newCubeR = randomCube.r;
                    let newCubeZ = randomCube.z;

                    const r = p.random(1);
                    if (r < 0.3) {
                        newCubeC++;
                    } else if (r < 0.6) {
                        newCubeR++;
                    } else {
                        newCubeZ++;
                    }

                    const projectedX = gridTopX + (newCubeC - newCubeR) * sideLength * Math.sqrt(3) / 2;
                    const projectedY = gridTopY + (newCubeC + newCubeR) * sideLength / 2 - sideLength * newCubeZ;

                    const isWithinBounds =
                        projectedX > sideLength &&
                        projectedX < p.width - sideLength &&
                        projectedY > sideLength &&
                        projectedY < p.height - sideLength;

                    if (isWithinBounds) {
                        const spotTaken = cubes.some((cube) => {
                            return (
                                cube.c === newCubeC &&
                                cube.r === newCubeR &&
                                cube.z === newCubeZ
                            );
                        });

                        if (!spotTaken) {
                            cubes.push(new Cube(newCubeC, newCubeR, newCubeZ));
                            cubeAdded = true;
                        }
                    }
                }
            }

            class Cube {
                constructor(c, r, z) {
                    this.c = c;
                    this.r = r;
                    this.z = z;
                    this.red = p.random(15, 25);
                    this.green = p.random(55, 255);
                    this.blue = p.random(55, 255);
                    this.offsetX = 0;
                    this.offsetY = 0;
                }

                getProjectedX() {
                    return gridTopX + (this.c - this.r) * sideLength * Math.sqrt(3) / 2 + this.offsetX;
                }

                getProjectedY() {
                    return gridTopY + (this.c + this.r) * sideLength / 2 - sideLength * this.z + this.offsetY;
                }

                applyOffset(x, y) {
                    this.offsetX += x;
                    this.offsetY += y;
                }

                draw() {
                    const x = this.getProjectedX();
                    const y = this.getProjectedY();

                    const points = [];
                    for (let angle = p.PI / 6; angle < p.PI * 2; angle += p.PI / 3) {
                        points.push(
                            p.createVector(
                                x + Math.cos(angle) * sideLength,
                                y + Math.sin(angle) * sideLength
                            )
                        );
                    }

                    p.fill(this.red * 0.75, this.green * 0.75, this.blue * 0.75);
                    p.quad(x, y, points[5].x, points[5].y, points[0].x, points[0].y, points[1].x, points[1].y);

                    p.fill(this.red * 0.9, this.green * 0.9, this.blue * 0.9);
                    p.quad(x, y, points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);

                    p.fill(this.red, this.green, this.blue);
                    p.quad(x, y, points[3].x, points[3].y, points[4].x, points[4].y, points[5].x, points[5].y);
                }

                getSortString() {
                    return `${this.z}.${this.r}.${this.c}`;
                }
            }
        });
    };

    useEffect(() => {
        initializeSketch();
        return () => {
            if (p5Instance.current) p5Instance.current.remove();
        };
    }, []);

    const handleMouseMove = (e) => {
        setHoverPosition({ x: e.clientX, y: e.clientY });
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            ref={sketchRef}
            className="p5-sketch"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {isHovering && (
                <div
                    className="hover-text"
                    style={{
                        top: hoverPosition.y,
                        left: hoverPosition.x,
                    }}
                >
                    <b>Made with p5.js</b> - click to regenerate
                </div>
            )}
        </div>
    );
}

export default HeroImage;
