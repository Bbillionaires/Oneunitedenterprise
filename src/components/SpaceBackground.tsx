'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RGB { r: number; g: number; b: number }

interface Star {
  x: number; y: number; radius: number;
  twinkleSpeed: number; twinkleOffset: number;
  day: RGB; night: RGB;
}

interface ShootingStar {
  x: number; y: number; vx: number; vy: number;
  length: number; opacity: number; active: boolean;
  countdown: number; angle: number;
}

interface Comet {
  x: number; y: number; vx: number; vy: number; tailLength: number;
}

interface AsteroidPoint { angle: number; r: number }

interface Asteroid {
  x: number; y: number; vx: number; vy: number;
  rotation: number; rotationSpeed: number;
  points: AsteroidPoint[];
  day: RGB; night: RGB;
}

interface Planet {
  x: number; y: number; vx: number; vy: number;
  radius: number; color: string; hasRing: boolean;
  ringAngle: number; exploding: boolean;
}

interface Particle {
  x: number; y: number; vx: number; vy: number;
  color: string; life: number; maxLife: number; radius: number;
}

interface DriftCluster {
  x: number; y: number; vx: number; vy: number;
  color: string; life: number; maxLife: number; radius: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function rand(min: number, max: number): number { return Math.random() * (max - min) + min }
function randInt(min: number, max: number): number { return Math.floor(rand(min, max + 1)) }
function lerpV(a: number, b: number, t: number): number { return a + (b - a) * t }

function lerpRGB(a: RGB, b: RGB, t: number): RGB {
  return {
    r: Math.round(lerpV(a.r, b.r, t)),
    g: Math.round(lerpV(a.g, b.g, t)),
    b: Math.round(lerpV(a.b, b.b, t)),
  }
}

function hexToRgb(hex: string): RGB {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return r
    ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) }
    : { r: 255, g: 255, b: 255 }
}

// Background lerp: day = warm white, twilight = deep indigo, night = deep space
function skyColor(p: number): string {
  if (p <= 0.5) {
    // Day → twilight: #FDFCF8 → #2C1A4A
    const a: RGB = { r: 253, g: 252, b: 248 }
    const b: RGB = { r: 44,  g: 26,  b: 74  }
    const c = lerpRGB(a, b, p * 2)
    return `rgb(${c.r},${c.g},${c.b})`
  } else {
    // Twilight → deep space: #2C1A4A → #07070F
    const a: RGB = { r: 44,  g: 26,  b: 74  }
    const b: RGB = { r: 7,   g: 7,   b: 15  }
    const c = lerpRGB(a, b, (p - 0.5) * 2)
    return `rgb(${c.r},${c.g},${c.b})`
  }
}

// ─── Initializers ─────────────────────────────────────────────────────────────

function initStars(w: number, h: number): Star[] {
  return Array.from({ length: 300 }, () => {
    const isBlue = Math.random() > 0.5
    const v1 = randInt(0, 40)
    const v2 = randInt(0, 40)
    return {
      x: rand(0, w), y: rand(0, h),
      radius: rand(0.2, 1.8),
      twinkleSpeed: rand(0.01, 0.05),
      twinkleOffset: rand(0, Math.PI * 2),
      // Dark colors visible on white (day), light colors visible on black (night)
      day:   isBlue ? { r: 20+v1, g: 40+v2, b: 130+randInt(0,60) }
                    : { r: 140+randInt(0,40), g: 50+v1, b: 10+v2 },
      night: isBlue ? { r: 180+v1, g: 190+v2, b: 255 }
                    : { r: 255, g: 220+randInt(0,30), b: 160+randInt(0,60) },
    }
  })
}

function createShootingStar(w: number, h: number): ShootingStar {
  const angles = [Math.PI/6, Math.PI/4, Math.PI/3, -Math.PI/6, -Math.PI/4, Math.PI*0.15]
  const angle = angles[randInt(0, angles.length - 1)]
  const speed = rand(8, 16)
  return {
    x: rand(0, w), y: rand(0, h * 0.5),
    vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
    length: rand(80, 200), opacity: 1, active: true,
    countdown: randInt(100, 400), angle,
  }
}

function initShootingStars(w: number, h: number): ShootingStar[] {
  return Array.from({ length: 6 }, () => {
    const ss = createShootingStar(w, h)
    ss.active = false; ss.countdown = randInt(100, 400)
    return ss
  })
}

function initComets(w: number, h: number): Comet[] {
  return Array.from({ length: 3 }, (_, i) => ({
    x: rand(0, w), y: rand(0, h),
    vx: rand(0.3, 0.7) * (i % 2 === 0 ? 1 : -1),
    vy: rand(0.1, 0.3) * (i < 2 ? 1 : -1),
    tailLength: rand(120, 220),
  }))
}

function makeAsteroidPoints(): AsteroidPoint[] {
  const n = randInt(5, 7)
  return Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2
    const baseR = rand(6, 14)
    return { angle, r: baseR + Math.sin(angle * 3 + rand(0, Math.PI)) * rand(2, 4) }
  })
}

function initAsteroids(w: number, h: number): Asteroid[] {
  return Array.from({ length: 25 }, () => {
    const dg = randInt(40, 100);  const ng = randInt(90, 160)
    const br = randInt(0, 25)
    return {
      x: rand(0, w), y: rand(0, h),
      vx: rand(-0.4, 0.4), vy: rand(-0.3, 0.3),
      rotation: rand(0, Math.PI * 2),
      rotationSpeed: rand(-0.005, 0.005),
      points: makeAsteroidPoints(),
      day:   { r: dg+br, g: dg, b: Math.max(0, dg-br) },
      night: { r: ng+br, g: ng, b: Math.max(0, ng-br) },
    }
  })
}

const PLANET_CONFIGS = [
  { color: '#D4A217' }, { color: '#4F8EF7' }, { color: '#A855F7' },
  { color: '#10C98F' }, { color: '#F97316' },
]

function initPlanets(w: number, h: number): Planet[] {
  return PLANET_CONFIGS.map((cfg, i) => ({
    x: rand(50, w-50), y: rand(50, h-50),
    vx: rand(-0.35, 0.35) || 0.15, vy: rand(-0.25, 0.25) || 0.1,
    radius: rand(8, 24), color: cfg.color,
    hasRing: i === 1 || i === 3, ringAngle: rand(0.2, 0.5), exploding: false,
  }))
}

// ─── Draw Functions ───────────────────────────────────────────────────────────

function drawNebulaClouds(ctx: CanvasRenderingContext2D, w: number, h: number, p: number) {
  const nebulas = [
    { x: w*0.05, y: h*0.08, r: w*0.45, color: '80,0,120',   dayOp: 0.12, nightOp: 0.04 },
    { x: w*0.9,  y: h*0.88, r: w*0.40, color: '0,30,100',   dayOp: 0.13, nightOp: 0.05 },
    { x: w*0.5,  y: h*0.05, r: w*0.35, color: '180,130,0',  dayOp: 0.08, nightOp: 0.03 },
    { x: w*0.08, y: h*0.82, r: w*0.38, color: '100,0,80',   dayOp: 0.10, nightOp: 0.04 },
  ]
  for (const n of nebulas) {
    const op = lerpV(n.dayOp, n.nightOp, p)
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r)
    grad.addColorStop(0,   `rgba(${n.color},${op})`)
    grad.addColorStop(0.5, `rgba(${n.color},${op*0.5})`)
    grad.addColorStop(1,   `rgba(${n.color},0)`)
    ctx.fillStyle = grad
    ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2); ctx.fill()
  }
}

function drawStars(ctx: CanvasRenderingContext2D, stars: Star[], frame: number, p: number) {
  for (const s of stars) {
    const alpha = 0.5 + 0.5 * Math.sin(frame * s.twinkleSpeed + s.twinkleOffset)
    const c = lerpRGB(s.day, s.night, p)
    ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2)
    ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${alpha.toFixed(2)})`
    ctx.fill()
  }
}

function drawShootingStars(
  ctx: CanvasRenderingContext2D, stars: ShootingStar[],
  w: number, h: number, p: number
) {
  // Lerp trail color: day = dark navy, night = white
  const tR = Math.round(lerpV(20,  255, p))
  const tG = Math.round(lerpV(40,  255, p))
  const tB = Math.round(lerpV(120, 255, p))

  for (const ss of stars) {
    if (!ss.active) {
      if (--ss.countdown <= 0) {
        ss.x = rand(0, w); ss.y = rand(0, h * 0.5)
        const speed = rand(8, 16)
        ss.vx = Math.cos(ss.angle) * speed; ss.vy = Math.sin(ss.angle) * speed
        ss.opacity = 1; ss.active = true
      }
      continue
    }

    ss.x += ss.vx; ss.y += ss.vy; ss.opacity -= 0.018
    if (ss.opacity <= 0 || ss.x < -200 || ss.x > w+200 || ss.y < -200 || ss.y > h+200) {
      ss.active = false; ss.countdown = randInt(100, 400); continue
    }

    const tx = ss.x - Math.cos(ss.angle) * ss.length
    const ty = ss.y - Math.sin(ss.angle) * ss.length
    const grad = ctx.createLinearGradient(tx, ty, ss.x, ss.y)
    grad.addColorStop(0,   `rgba(${tR},${tG},${tB},0)`)
    grad.addColorStop(0.6, `rgba(${tR},${tG},${tB},${ss.opacity*0.4})`)
    grad.addColorStop(1,   `rgba(${tR},${tG},${tB},${ss.opacity})`)
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(ss.x, ss.y)
    ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.stroke()

    const hg = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 4)
    hg.addColorStop(0, `rgba(${tR},${tG},${tB},${ss.opacity})`)
    hg.addColorStop(1, `rgba(${tR},${tG},${tB},0)`)
    ctx.beginPath(); ctx.arc(ss.x, ss.y, 4, 0, Math.PI*2)
    ctx.fillStyle = hg; ctx.fill()
  }
}

function drawComets(ctx: CanvasRenderingContext2D, comets: Comet[], w: number, h: number, p: number) {
  // Day: dark navy tail; Night: icy blue-white tail
  const hR = Math.round(lerpV(20,  200, p))
  const hG = Math.round(lerpV(40,  220, p))
  const hB = Math.round(lerpV(130, 255, p))

  for (const c of comets) {
    c.x += c.vx; c.y += c.vy
    if (c.x > w+c.tailLength) c.x = -c.tailLength
    if (c.x < -c.tailLength)  c.x = w+c.tailLength
    if (c.y > h+c.tailLength) c.y = -c.tailLength
    if (c.y < -c.tailLength)  c.y = h+c.tailLength

    const angle = Math.atan2(c.vy, c.vx)
    const tx = c.x - Math.cos(angle) * c.tailLength
    const ty = c.y - Math.sin(angle) * c.tailLength

    const grad = ctx.createLinearGradient(tx, ty, c.x, c.y)
    grad.addColorStop(0,   `rgba(${hR},${hG},${hB},0)`)
    grad.addColorStop(0.7, `rgba(${hR},${hG},${hB},0.15)`)
    grad.addColorStop(1,   `rgba(${hR},${hG},${hB},0.85)`)
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(c.x, c.y)
    ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.stroke()

    const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 8)
    glow.addColorStop(0,   `rgba(${hR},${hG},${hB},0.85)`)
    glow.addColorStop(0.4, `rgba(${hR},${hG},${hB},0.4)`)
    glow.addColorStop(1,   `rgba(${hR},${hG},${hB},0)`)
    ctx.beginPath(); ctx.arc(c.x, c.y, 8, 0, Math.PI*2)
    ctx.fillStyle = glow; ctx.fill()
  }
}

function drawAsteroids(ctx: CanvasRenderingContext2D, asteroids: Asteroid[], w: number, h: number, p: number) {
  const maxR = 20
  for (const a of asteroids) {
    a.x += a.vx; a.y += a.vy; a.rotation += a.rotationSpeed
    if (a.x > w+maxR) a.x = -maxR; if (a.x < -maxR) a.x = w+maxR
    if (a.y > h+maxR) a.y = -maxR; if (a.y < -maxR) a.y = h+maxR

    const c = lerpRGB(a.day, a.night, p)
    const strokeAlpha = lerpV(0.2, 0.15, p)

    ctx.save(); ctx.translate(a.x, a.y); ctx.rotate(a.rotation)
    ctx.beginPath()
    a.points.forEach((pt, i) => {
      const px = Math.cos(pt.angle) * pt.r
      const py = Math.sin(pt.angle) * pt.r
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
    })
    ctx.closePath()
    ctx.fillStyle = `rgb(${c.r},${c.g},${c.b})`
    ctx.fill()
    ctx.strokeStyle = `rgba(128,128,128,${strokeAlpha})`
    ctx.lineWidth = 0.5; ctx.stroke()
    ctx.restore()
  }
}

function drawPlanets(
  ctx: CanvasRenderingContext2D, planets: Planet[],
  particles: Particle[], driftClusters: DriftCluster[],
  w: number, h: number
) {
  for (const p of planets) {
    if (p.exploding) continue
    p.x += p.vx; p.y += p.vy
    if (p.x-p.radius < 0) { p.x = p.radius; p.vx = Math.abs(p.vx) }
    if (p.x+p.radius > w) { p.x = w-p.radius; p.vx = -Math.abs(p.vx) }
    if (p.y-p.radius < 0) { p.y = p.radius; p.vy = Math.abs(p.vy) }
    if (p.y+p.radius > h) { p.y = h-p.radius; p.vy = -Math.abs(p.vy) }
  }

  for (let i = 0; i < planets.length; i++) {
    for (let j = i+1; j < planets.length; j++) {
      const a = planets[i]; const b = planets[j]
      if (a.exploding || b.exploding) continue
      const dx = b.x-a.x; const dy = b.y-a.y
      const dist = Math.sqrt(dx*dx + dy*dy)
      const threshold = a.radius+b.radius+10
      if (dist < threshold) {
        const nx = dx/dist; const ny = dy/dist
        const dot = (b.vx-a.vx)*nx + (b.vy-a.vy)*ny
        if (dot < 0) { a.vx -= dot*nx; a.vy -= dot*ny; b.vx += dot*nx; b.vy += dot*ny }
        spawnExplosion(particles, driftClusters, a.x, a.y, a.color, b.color)
        spawnExplosion(particles, driftClusters, b.x, b.y, b.color, a.color)
        const ov = threshold-dist
        a.x -= nx*ov*0.5; a.y -= ny*ov*0.5
        b.x += nx*ov*0.5; b.y += ny*ov*0.5
      }
    }
  }

  for (const p of planets) {
    if (p.exploding) continue
    const rgb = hexToRgb(p.color)
    if (p.hasRing) {
      ctx.save(); ctx.translate(p.x, p.y); ctx.scale(1, p.ringAngle)
      const rg = ctx.createRadialGradient(0,0,p.radius*1.1, 0,0,p.radius*2.2)
      rg.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.5)`)
      rg.addColorStop(0.5, `rgba(${rgb.r},${rgb.g},${rgb.b},0.2)`)
      rg.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`)
      ctx.beginPath(); ctx.arc(0,0,p.radius*2.2,0,Math.PI*2)
      ctx.fillStyle = rg; ctx.fill(); ctx.restore()
    }
    const gg = ctx.createRadialGradient(p.x,p.y,0, p.x,p.y,p.radius*2.5)
    gg.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.3)`)
    gg.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`)
    ctx.beginPath(); ctx.arc(p.x,p.y,p.radius*2.5,0,Math.PI*2)
    ctx.fillStyle = gg; ctx.fill()
    const bg = ctx.createRadialGradient(p.x-p.radius*0.3,p.y-p.radius*0.3,0, p.x,p.y,p.radius)
    bg.addColorStop(0, `rgba(${Math.min(rgb.r+80,255)},${Math.min(rgb.g+80,255)},${Math.min(rgb.b+80,255)},1)`)
    bg.addColorStop(0.5, `rgba(${rgb.r},${rgb.g},${rgb.b},1)`)
    bg.addColorStop(1, `rgba(${Math.max(rgb.r-60,0)},${Math.max(rgb.g-60,0)},${Math.max(rgb.b-60,0)},1)`)
    ctx.beginPath(); ctx.arc(p.x,p.y,p.radius,0,Math.PI*2)
    ctx.fillStyle = bg; ctx.fill()
  }

  for (let i = particles.length-1; i >= 0; i--) {
    const pt = particles[i]
    pt.x += pt.vx; pt.y += pt.vy; pt.vx *= 0.97; pt.vy *= 0.97; pt.life--
    if (pt.life <= 0) { particles.splice(i,1); continue }
    const a = pt.life/pt.maxLife
    const rgb = hexToRgb(pt.color)
    ctx.beginPath(); ctx.arc(pt.x,pt.y,pt.radius*a,0,Math.PI*2)
    ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`; ctx.fill()
  }

  for (let i = driftClusters.length-1; i >= 0; i--) {
    const dc = driftClusters[i]
    dc.x += dc.vx; dc.y += dc.vy; dc.life--
    if (dc.life <= 0) { driftClusters.splice(i,1); continue }
    const a = (dc.life/dc.maxLife)*0.8
    const rgb = hexToRgb(dc.color)
    const gr = dc.radius*(1+(1-dc.life/dc.maxLife)*0.5)
    const glow = ctx.createRadialGradient(dc.x,dc.y,0, dc.x,dc.y,gr)
    glow.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`)
    glow.addColorStop(0.5, `rgba(${rgb.r},${rgb.g},${rgb.b},${a*0.4})`)
    glow.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`)
    ctx.beginPath(); ctx.arc(dc.x,dc.y,gr,0,Math.PI*2)
    ctx.fillStyle = glow; ctx.fill()
  }
}

function spawnExplosion(
  particles: Particle[], driftClusters: DriftCluster[],
  x: number, y: number, c1: string, c2: string
) {
  for (let i = 0; i < 20; i++) {
    const angle = Math.random()*Math.PI*2; const speed = rand(1,5)
    const ml = randInt(60,90)
    particles.push({ x, y, vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed,
      color: Math.random()>0.5?c1:c2, life:ml, maxLife:ml, radius:rand(1.5,3.5) })
  }
  for (let i = 0; i < randInt(3,5); i++) {
    const angle = Math.random()*Math.PI*2; const speed = rand(0.3,1.2)
    const ml = randInt(90,180)
    driftClusters.push({ x: x+rand(-10,10), y: y+rand(-10,10),
      vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed,
      color: Math.random()>0.5?c1:c2, life:ml, maxLife:ml, radius:rand(3,8) })
  }
}

function drawSun(ctx: CanvasRenderingContext2D, frame: number, w: number, h: number) {
  const cx = w/2; const cy = h/2
  const oA = Math.min(w,h)*0.45; const oB = oA*0.5
  const t = (frame/(50*60))*Math.PI*2
  const sx = cx+Math.cos(t)*oA; const sy = cy+Math.sin(t)*oB
  const op = 1-((Math.sin(t)+1)/2)*0.7

  const og = ctx.createRadialGradient(sx,sy,0, sx,sy,90)
  og.addColorStop(0, `rgba(255,200,50,${op*0.08})`); og.addColorStop(0.5, `rgba(255,160,20,${op*0.04})`); og.addColorStop(1, 'rgba(255,120,0,0)')
  ctx.beginPath(); ctx.arc(sx,sy,90,0,Math.PI*2); ctx.fillStyle=og; ctx.fill()

  const mg = ctx.createRadialGradient(sx,sy,0, sx,sy,45)
  mg.addColorStop(0, `rgba(255,220,80,${op*0.35})`); mg.addColorStop(0.6, `rgba(255,180,30,${op*0.15})`); mg.addColorStop(1, 'rgba(255,140,0,0)')
  ctx.beginPath(); ctx.arc(sx,sy,45,0,Math.PI*2); ctx.fillStyle=mg; ctx.fill()

  const cg = ctx.createRadialGradient(sx,sy,0, sx,sy,18)
  cg.addColorStop(0, `rgba(255,255,220,${op})`); cg.addColorStop(0.4, `rgba(255,230,100,${op*0.9})`); cg.addColorStop(1, 'rgba(255,180,0,0)')
  ctx.beginPath(); ctx.arc(sx,sy,18,0,Math.PI*2); ctx.fillStyle=cg; ctx.fill()
}

function drawMoon(ctx: CanvasRenderingContext2D, frame: number, w: number, h: number, p: number) {
  const cx = w/2; const cy = h/2
  const oA = Math.min(w,h)*0.42; const oB = oA*0.48
  const t = (frame/(50*60))*Math.PI*2 + Math.PI
  const mx = cx+Math.cos(t)*oA; const my = cy+Math.sin(t)*oB
  const mr = 12

  // Glow: day = indigo, night = silver-blue
  const gR = Math.round(lerpV(40,  200, p))
  const gG = Math.round(lerpV(60,  215, p))
  const gB = Math.round(lerpV(160, 255, p))
  const glow = ctx.createRadialGradient(mx,my,0, mx,my,mr*2.5)
  glow.addColorStop(0, `rgba(${gR},${gG},${gB},0.25)`)
  glow.addColorStop(0.5, `rgba(${gR},${gG},${gB},0.1)`)
  glow.addColorStop(1, `rgba(${gR},${gG},${gB},0)`)
  ctx.beginPath(); ctx.arc(mx,my,mr*2.5,0,Math.PI*2); ctx.fillStyle=glow; ctx.fill()

  // Body: day = dark navy, night = light silver
  const b0: RGB = { r: 80, g: 100, b: 190 }
  const b1: RGB = { r: 220, g: 230, b: 255 }
  const be0: RGB = { r: 30, g: 40, b: 110 }
  const be1: RGB = { r: 130, g: 150, b: 200 }
  const bodyHigh = lerpRGB(b0, b1, p)
  const bodyEdge = lerpRGB(be0, be1, p)
  const bodyMid  = lerpRGB({ r:50,g:65,b:155 }, { r:180,g:195,b:230 }, p)

  const mg = ctx.createRadialGradient(mx-mr*0.2,my-mr*0.2,0, mx,my,mr)
  mg.addColorStop(0,   `rgba(${bodyHigh.r},${bodyHigh.g},${bodyHigh.b},1)`)
  mg.addColorStop(0.6, `rgba(${bodyMid.r},${bodyMid.g},${bodyMid.b},1)`)
  mg.addColorStop(1,   `rgba(${bodyEdge.r},${bodyEdge.g},${bodyEdge.b},1)`)
  ctx.beginPath(); ctx.arc(mx,my,mr,0,Math.PI*2); ctx.fillStyle=mg; ctx.fill()

  // Crescent shadow: day = warm white mask, night = dark mask
  const sR = Math.round(lerpV(253, 5,  p))
  const sG = Math.round(lerpV(252, 5,  p))
  const sB = Math.round(lerpV(248, 20, p))
  const sA = lerpV(0.95, 0.92, p)
  ctx.beginPath()
  ctx.arc(mx+mr*0.45, my+mr*0.1, mr*0.88, 0, Math.PI*2)
  ctx.fillStyle = `rgba(${sR},${sG},${sB},${sA})`; ctx.fill()
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { progress } = useTheme()

  // Use refs to pass latest values into the RAF loop without restarting it
  const targetProgressRef = useRef(progress)
  const lerpedProgressRef = useRef(progress)

  useEffect(() => {
    targetProgressRef.current = progress
  }, [progress])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w; canvas.height = h

    let stars        = initStars(w, h)
    let shootingStars = initShootingStars(w, h)
    let comets       = initComets(w, h)
    let asteroids    = initAsteroids(w, h)
    let planets      = initPlanets(w, h)
    const particles: Particle[] = []
    const driftClusters: DriftCluster[] = []

    let frame  = 0
    let rafId: number

    function handleResize() {
      w = window.innerWidth; h = window.innerHeight
      canvas!.width = w; canvas!.height = h
      stars = initStars(w, h)
    }
    window.addEventListener('resize', handleResize)

    function draw() {
      if (!ctx) return

      // Smooth lerp towards target (≈2-4 second manual transition at 60fps)
      lerpedProgressRef.current += (targetProgressRef.current - lerpedProgressRef.current) * 0.015
      const p = lerpedProgressRef.current

      // Clear with interpolated sky color
      ctx.fillStyle = skyColor(p)
      ctx.fillRect(0, 0, w, h)

      drawNebulaClouds(ctx, w, h, p)
      drawStars(ctx, stars, frame, p)
      drawComets(ctx, comets, w, h, p)
      drawAsteroids(ctx, asteroids, w, h, p)
      drawSun(ctx, frame, w, h)
      drawMoon(ctx, frame, w, h, p)
      drawPlanets(ctx, planets, particles, driftClusters, w, h)
      drawShootingStars(ctx, shootingStars, w, h, p)

      frame++
      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  )
}
