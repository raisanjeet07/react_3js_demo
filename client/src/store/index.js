import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullText: true,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;