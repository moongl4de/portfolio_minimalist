let container = document.getElementById("main")
let text = new Blotter.Text("//alexgignilliat", {
    family: "sans-serif",
    size: 110,
    fill: "#000",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
});

let material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = .01;
material.uniforms.uPointRadius.value = 66;
material.uniforms.uSpeed.value = 3;

let blotter = new Blotter(material, {
    texts: text
});

let scope = blotter.forText(text);
scope.appendTo(container);

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 1250,
            "density": {
                "enable": true,
                "value_area": 10000
            }
        },
        "color": {
            "value": ["#267ec6", "#114067", "#596b7a", "#81a2bd"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.01,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 3,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#666",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": .5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 150,
                "duration": 1
            },
            "push": {
                "particles_nb": 3
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

