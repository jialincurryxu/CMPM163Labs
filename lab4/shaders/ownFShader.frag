uniform sampler2D texture2;
varying vec2 vUv;

void main() {
	// sample from the texture based on the uv coordinates
    gl_FragColor = texture2D(texture2, mod (vUv,1.0));
}

