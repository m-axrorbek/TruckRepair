"use client";

import React, { useRef, useEffect } from 'react';

interface ButtonDef {
  text: string;
  icon?: 'phone' | 'telegram';
  onClick?: () => void;
}

interface HeroProps {
  trustBadge?: { text: string };
  headline: { line1: string; line2: string; accent?: string };
  subtitle: string;
  buttons?: { primary?: ButtonDef; secondary?: ButtonDef };
  stats?: { value: string; label: string }[];
  className?: string;
}

const SHADER_SRC = `#version 300 es
/*
 * made by Matthias Hurrle (@atzedent)
 * Adapted — red/crimson industrial palette
 */
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 touch;
uniform vec2 move;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(1.4,0.1,0.15))+1.)*vec3(1.,.15,.15);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)))*vec3(1.,.1,.1);
    col=mix(col,vec3(bg*.2,bg*.04,bg*.04),d);
  }
  O=vec4(col,1);
}`;

// SVG icons
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const GearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

function ButtonIcon({ icon }: { icon?: string }) {
  if (icon === 'phone') return <PhoneIcon />;
  if (icon === 'telegram') return <TelegramIcon />;
  return null;
}

function useShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS))
        console.error('Shader error:', gl.getShaderInfoLog(sh));
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER,
      `#version 300 es\nin vec4 position;\nvoid main(){gl_Position=position;}`);
    const fs = compile(gl.FRAGMENT_SHADER, SHADER_SRC);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes  = gl.getUniformLocation(prog, 'resolution');
    const uTime = gl.getUniformLocation(prog, 'time');
    const uTouch= gl.getUniformLocation(prog, 'touch');
    const uMove = gl.getUniformLocation(prog, 'move');

    const resize = () => {
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = [e.clientX, canvas.height - e.clientY];
    };
    window.addEventListener('mousemove', onMouse);

    const loop = (now: number) => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now * 1e-3);
      gl.uniform2f(uTouch, mouseRef.current[0], mouseRef.current[1]);
      gl.uniform2f(uMove, 0, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return canvasRef;
}

const AnimatedShaderHero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  stats,
  className = '',
}) => {
  const canvasRef = useShaderCanvas();

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-[#0B0B0D] ${className}`}>
      {/* WebGL canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: 'block' }} />

      {/* Subtle right-side vignette only — keeps animation visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 90% at 65% 50%, transparent 25%, rgba(11,11,13,0.45) 100%)',
          zIndex: 1,
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0B0B0D)', zIndex: 1 }}
      />

      {/* Main content — flex column with space-between so stats never touch scroll cue */}
      <div
        className="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-6 lg:px-8"
        style={{ zIndex: 10, paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        {/* Top block: badge + headline + subtitle + buttons */}
        <div className="max-w-2xl flex flex-col justify-center flex-1">
          {trustBadge && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 w-fit"
              style={{
                background: 'rgba(11,11,13,0.65)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(229,57,53,0.25)',
                animation: 'ux-fadeDown 0.8s ease-out both',
              }}
            >
              <GearIcon />
              <span className="text-sm font-medium" style={{ color: '#B5B5B5' }}>{trustBadge.text}</span>
              <span className="w-2 h-2 rounded-full" style={{ background: '#E53935', animation: 'ux-pulse 2s infinite' }} />
            </div>
          )}

          <h1
            className="font-black leading-[0.9] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
              animation: 'ux-fadeUp 0.9s ease-out 0.15s both',
            }}
          >
            <span style={{ color: '#FFFFFF', display: 'block' }}>{headline.line1}</span>
            <span style={{ color: '#FFFFFF' }}>{headline.line2}</span>
            {headline.accent && <span style={{ color: '#E53935' }}> {headline.accent}</span>}
          </h1>

          <p
            className="text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: '#B5B5B5', animation: 'ux-fadeUp 0.9s ease-out 0.3s both' }}
          >
            {subtitle}
          </p>

          {buttons && (
            <div className="flex flex-wrap gap-4" style={{ animation: 'ux-fadeUp 0.9s ease-out 0.45s both' }}>
              {buttons.primary && (
                <button
                  onClick={buttons.primary.onClick}
                  className="flex items-center gap-2.5 font-bold text-base rounded-xl px-7 py-4 transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]"
                  style={{ background: '#E53935', color: '#fff', boxShadow: '0 8px 32px rgba(229,57,53,0.4)' }}
                >
                  <ButtonIcon icon={buttons.primary.icon} />
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button
                  onClick={buttons.secondary.onClick}
                  className="flex items-center gap-2.5 font-bold text-base rounded-xl px-7 py-4 transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]"
                  style={{
                    background: 'rgba(11,11,13,0.55)',
                    color: '#fff',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <ButtonIcon icon={buttons.secondary.icon} />
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Bottom block: stats grid — always above scroll cue */}
        {stats && (
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
            style={{ animation: 'ux-fadeUp 0.9s ease-out 0.6s both' }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4"
                style={{
                  background: 'rgba(11,11,13,0.6)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="text-2xl lg:text-3xl font-black text-white leading-none mb-1">{s.value}</div>
                <div className="text-xs font-medium" style={{ color: '#B5B5B5' }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll cue — sits in its own absolute layer, never overlaps content */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ zIndex: 20, animation: 'ux-fadeUp 1s ease-out 1.2s both' }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, #E53935, transparent)',
            animation: 'ux-bar 2s ease-in-out infinite',
            transformOrigin: 'top',
          }}
        />
      </div>

      <style>{`
        @keyframes ux-fadeDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ux-fadeUp   { from{opacity:0;transform:translateY(28px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes ux-pulse    { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes ux-bar      { 0%,100%{transform:scaleY(0);opacity:0} 50%{transform:scaleY(1);opacity:1} }
      `}</style>
    </div>
  );
};

export default AnimatedShaderHero;
