"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const FallingDivs = ({ divs, duration = 1000, delay = 100 }) => {
    const containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const container = containerRef.current;
        if (container) {
            const height = container.clientHeight;
            divs.forEach((div, index) => {
                const element = container.children[index];
                element.style.opacity = '0';
                element.style.transform = `translateY(-${height}px)`;
                setTimeout(() => {
                    element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay * index);
            });
        }
    }, [divs, duration, delay]);
    return (react_1.default.createElement("div", { ref: containerRef, style: { position: 'relative', overflow: 'hidden' } }, divs.map((div, index) => (react_1.default.createElement("div", { key: index, style: { position: 'absolute', top: 0, left: 0, right: 0 } }, div)))));
};
exports.default = FallingDivs;
