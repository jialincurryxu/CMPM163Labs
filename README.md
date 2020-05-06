# CMPM163Labs
Work for Game Graphics and Real-Time Rendering at UCSC Spring 20
By Jialin(Curry) Xu

# Lab2
Part 1 link: https://drive.google.com/open?id=1BDhBHd_NgVBAyQNoYGIJVo6yeKxpijSx

Part 2: 
![](lab2/part2.png)

# Lab3
On the top roll are the cubes made with THREE.js library materials, from left to right are: MeshPhysicalMaterial(with modify of metalness, roughness, clearcoat, clearcoatRoughness and reflectivity), MeshPhongMaterial(the one in doc), MeshToonMaterial(with modify of color and shininess)

On the bottom roll are the cubes I made with custom shaders. The left one is an interpolation between red, green and blue. I was trying to make the rainbow effect but no success there. The one on the right is the one I made following the doc.

Video: https://drive.google.com/open?id=1F2C6pqBcxOd7lEEEZVICbbpeDR9draTm

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

# Lab5 
Part 2a: 
Video: https://drive.google.com/open?id=1VoBngNZ59c2tZ0zdZeUV-aA4dTnnKk6u

Part 2b:
Video: https://drive.google.com/open?id=11GniFfoS1oc9UQcHTTv0iVJdwOeAsa1q

Part 2b modify:
The way I modify the particle system is to combine the previous two parts and first populate the whole screen with moving particles, and when the particles hit the boundary I set, their position will reset to the mouse and there will be a little particle fountain where the mouse is pointing. I also replaced the texture for the particles.
Video: https://drive.google.com/open?id=1i6Cw49kvI1z96Q0NMW5khVcvozy4UkT4