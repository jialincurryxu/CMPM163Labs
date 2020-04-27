# Lab4
Answer to 24:
a) The formula should be: u value of uv coordinate * width of texture size (u * 8) 
b) The formula should be: v value of uv coordinate * height of texture size (v * 8) 
c) The color sampled at uv coordinate (0.375, 0.25) should be grey if bottom left corner is (0,0)

Top roll cubes from left to right are: part 1 Texture A (uses three.js built in texture functionality), part 1 Texture A & Normal Map A (uses three.js built in texture functionality) and part 1 Texture B & Normal Map B (new texture/normal map combo using built in three.js functionality).
Bottom roll cubes from left to eight are: part 2 Texture C (load this texture with shaders, as we worked through in the lab together) and part 2 Texture D (tile this texture at least by showing a 2x2 grid).

How I solved Cube5: 
In the vertex shader I used for cube5, I make uVu = uv *2.0, which shinks the whole uv coordinate system by 1/2 and make it only covers 1/4 of the surface. Then in my fragment shader I used gl_FragColor = texture2D(texture2, mod (vUv,1.0)) so when the shader is trying to color the place where the uVu cannot reach, it will warp correctly.

Video: https://drive.google.com/open?id=1PJJwNybhlolk2f450P0ukQMKfXdzyOar