varying vec3 vUv;

uniform vec3 colorC;
uniform vec3 colorD;
uniform vec3 colorE;

void main() {
    vec3 color1 = mix(colorC, colorD, vUv.x);
    vec3 color2 = mix(colorD, colorE, vUv.y);
    vec3 color3 = mix(colorE, colorC, vUv.z);

    vec3 allColor = mix(color1, color2, color3);
    // gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0); //rgba, return blue
    // gl_FragColor = vec4(mix(colorC, colorD, vUv.z), 1.0);
    gl_FragColor = vec4(allColor, 1.0);
}
