'use client';

import { useEffect, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Star {
  x: number;
  y: number;
  radius: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  active: boolean;
  countdown: number;
  angle: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tailLength: number;
}

interface AsteroidPoint {
  angle: number;
  r: number;
}

interface Asteroid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  points: AsteroidPoint[];
  color: string;
}

interface Planet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  hasRing: boolean;
  ringAngle: number;
  exploding: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  maxLife: number;
  radius: number;
}

interface DriftCluster {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  maxLife: number;
  radius: number;
}

// ─── Helper Utilities ─────────────────────────────────────────────────────────

function rand(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 255, g: 255, b: 255 };
}

// ─── Initializers ─────────────────────────────────────────────────────────────

function initStars(w: number, h: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < 300; i++) {
    const isBlue = Math.random() > 0.5;
    stars.push({
      x: rand(0, w),
      y: rand(0, h),
      radius: rand(0.2, 1.8),
      twinkleSpeed: rand(0.01, 0.05),
      twinkleOffset: rand(0, Math.PI * 2),
      color: isBlue
        ? `rgba(${180 + randInt(0, 40)}, ${190 + randInt(0, 40)}, 255, 1)`
        : `rgba(255, ${220 + randInt(0, 30)}, ${160 + randInt(0, 60)}, 1)`,
    });
  }
  return stars;
}

function createShootingStar(w: number, h: number): ShootingStar {
  // Angles: roughly diagonal — pick from a few preset directions
  const angles = [
    Math.PI / 6,
    Math.PI / 4,
    Math.PI / 3,
    -Math.PI / 6,
    -Math.PI / 4,
    Math.PI * 0.15,
  ];
  const angle = angles[randInt(0, angles.length - 1)];
  const speed = rand(8, 16);
  return {
    x: rand(0, w),
    y: rand(0, h * 0.5),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    length: rand(80, 200),
    opacity: 1,
    active: true,
    countdown: randInt(100, 400),
    angle,
  };
}

function initShootingStars(w: number, h: number): ShootingStar[] {
  return Array.from({ length: 6 }, () => {
    const ss = createShootingStar(w, h);
    ss.active = false;
    ss.countdown = randInt(100, 400);
    return ss;
  });
}

function initComets(w: number, h: number): Comet[] {
  return Array.from({ length: 3 }, (_, i) => ({
    x: rand(0, w),
    y: rand(0, h),
    vx: rand(0.3, 0.7) * (i % 2 === 0 ? 1 : -1),
    vy: rand(0.1, 0.3) * (i < 2 ? 1 : -1),
    tailLength: rand(120, 220),
  }));
}

function makeAsteroidPoints(): AsteroidPoint[] {
  const numPoints = randInt(5, 7);
  const points: AsteroidPoint[] = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    const baseR = rand(6, 14);
    const r = baseR + Math.sin(angle * 3 + rand(0, Math.PI)) * rand(2, 4);
    points.push({ angle, r });
  }
  return points;
}

function initAsteroids(w: number, h: number): Asteroid[] {
  return Array.from({ length: 25 }, () => {
    const gray = randInt(90, 160);
    const brown = randInt(0, 30);
    return {
      x: rand(0, w),
      y: rand(0, h),
      vx: rand(-0.4, 0.4),
      vy: rand(-0.3, 0.3),
      rotation: rand(0, Math.PI * 2),
      rotationSpeed: rand(-0.005, 0.005),
      points: makeAsteroidPoints(),
      color: `rgb(${gray + brown}, ${gray}, ${gray - brown})`,
    };
  });
}

const PLANET_CONFIGS = [
  { color: '#D4A217', name: 'film-gold' },
  { color: '#4F8EF7', name: 'consulting-blue' },
  { color: '#A855F7', name: 'nonprofit-purple' },
  { color: '#10C98F', name: 'medical-green' },
  { color: '#F97316', name: 'investment-orange' },
];

function initPlanets(w: number, h: number): Planet[] {
  return PLANET_CONFIGS.map((cfg, i) => ({
    x: rand(50, w - 50),
    y: rand(50, h - 50),
    vx: rand(-0.35, 0.35) || 0.15,
    vy: rand(-0.25, 0.25) || 0.1,
    radius: rand(8, 24),
    color: cfg.color,
    hasRing: i === 1 || i === 3,
    ringAngle: rand(0.2, 0.5),
    exploding: false,
  }));
}

// ─── Draw Helpers ─────────────────────────────────────────────────────────────

function drawNebulaClouds(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const nebulas = [
    { x: w * 0.05, y: h * 0.08, r: w * 0.45, color: '80, 0, 120', opacity: 0.06 },
    { x: w * 0.9, y: h * 0.88, r: w * 0.4, color: '0, 30, 100', opacity: 0.07 },
    { x: w * 0.5, y: h * 0.05, r: w * 0.35, color: '180, 130, 0', opacity: 0.04 },
    { x: w * 0.08, y: h * 0.82, r: w * 0.38, color: '100, 0, 80', opacity: 0.05 },
  ];

  for (const n of nebulas) {
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
    grad.addColorStop(0, `rgba(${n.color}, ${n.opacity})`);
    grad.addColorStop(0.5, `rgba(${n.color}, ${n.opacity * 0.5})`);
    grad.addColorStop(1, `rgba(${n.color}, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawStars(ctx: CanvasRenderingContext2D, stars: Star[], frame: number) {
  for (const s of stars) {
    const alpha = 0.5 + 0.5 * Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
    const colorWithAlpha = s.color.replace(/, 1\)$/, `, ${alpha.toFixed(2)})`);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = colorWithAlpha;
    ctx.fill();
  }
}

function drawShootingStars(
  ctx: CanvasRenderingContext2D,
  stars: ShootingStar[],
  w: number,
  h: number,
  frame: number
) {
  for (const ss of stars) {
    if (!ss.active) {
      ss.countdown--;
      if (ss.countdown <= 0) {
        // Activate
        ss.x = rand(0, w);
        ss.y = rand(0, h * 0.5);
        const angle = ss.angle;
        const speed = rand(8, 16);
        ss.vx = Math.cos(angle) * speed;
        ss.vy = Math.sin(angle) * speed;
        ss.opacity = 1;
        ss.active = true;
      }
      continue;
    }

    ss.x += ss.vx;
    ss.y += ss.vy;
    ss.opacity -= 0.018;

    if (ss.opacity <= 0 || ss.x < -200 || ss.x > w + 200 || ss.y < -200 || ss.y > h + 200) {
      ss.active = false;
      ss.countdown = randInt(100, 400);
      continue;
    }

    // Draw tail
    const tailX = ss.x - Math.cos(ss.angle) * ss.length;
    const tailY = ss.y - Math.sin(ss.angle) * ss.length;
    const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
    grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
    grad.addColorStop(0.6, `rgba(220, 240, 255, ${ss.opacity * 0.4})`);
    grad.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(ss.x, ss.y);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Head glow
    const headGrad = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 4);
    headGrad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
    headGrad.addColorStop(1, `rgba(255, 255, 255, 0)`);
    ctx.beginPath();
    ctx.arc(ss.x, ss.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = headGrad;
    ctx.fill();
  }
}

function drawComets(ctx: CanvasRenderingContext2D, comets: Comet[], w: number, h: number) {
  for (const c of comets) {
    c.x += c.vx;
    c.y += c.vy;

    // Wrap around
    if (c.x > w + c.tailLength) c.x = -c.tailLength;
    if (c.x < -c.tailLength) c.x = w + c.tailLength;
    if (c.y > h + c.tailLength) c.y = -c.tailLength;
    if (c.y < -c.tailLength) c.y = h + c.tailLength;

    const angle = Math.atan2(c.vy, c.vx);
    const tailEndX = c.x - Math.cos(angle) * c.tailLength;
    const tailEndY = c.y - Math.sin(angle) * c.tailLength;

    const grad = ctx.createLinearGradient(tailEndX, tailEndY, c.x, c.y);
    grad.addColorStop(0, 'rgba(200, 220, 255, 0)');
    grad.addColorStop(0.7, 'rgba(200, 220, 255, 0.15)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

    ctx.beginPath();
    ctx.moveTo(tailEndX, tailEndY);
    ctx.lineTo(c.x, c.y);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Head glow
    const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 8);
    glow.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    glow.addColorStop(0.4, 'rgba(180, 210, 255, 0.4)');
    glow.addColorStop(1, 'rgba(180, 210, 255, 0)');
    ctx.beginPath();
    ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();
  }
}

function drawAsteroids(ctx: CanvasRenderingContext2D, asteroids: Asteroid[], w: number, h: number) {
  for (const a of asteroids) {
    a.x += a.vx;
    a.y += a.vy;
    a.rotation += a.rotationSpeed;

    // Wrap around
    const maxR = 20;
    if (a.x > w + maxR) a.x = -maxR;
    if (a.x < -maxR) a.x = w + maxR;
    if (a.y > h + maxR) a.y = -maxR;
    if (a.y < -maxR) a.y = h + maxR;

    ctx.save();
    ctx.translate(a.x, a.y);
    ctx.rotate(a.rotation);

    ctx.beginPath();
    for (let i = 0; i < a.points.length; i++) {
      const p = a.points[i];
      const px = Math.cos(p.angle) * p.r;
      const py = Math.sin(p.angle) * p.r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = a.color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(200,200,200,0.15)';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    ctx.restore();
  }
}

function drawPlanets(
  ctx: CanvasRenderingContext2D,
  planets: Planet[],
  particles: Particle[],
  driftClusters: DriftCluster[],
  w: number,
  h: number
) {
  // Move and bounce planets
  for (const p of planets) {
    if (p.exploding) continue;
    p.x += p.vx;
    p.y += p.vy;
    if (p.x - p.radius < 0) { p.x = p.radius; p.vx = Math.abs(p.vx); }
    if (p.x + p.radius > w) { p.x = w - p.radius; p.vx = -Math.abs(p.vx); }
    if (p.y - p.radius < 0) { p.y = p.radius; p.vy = Math.abs(p.vy); }
    if (p.y + p.radius > h) { p.y = h - p.radius; p.vy = -Math.abs(p.vy); }
  }

  // Check collisions
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const a = planets[i];
      const b = planets[j];
      if (a.exploding || b.exploding) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = a.radius + b.radius + 10;
      if (dist < threshold) {
        // Bounce
        const nx = dx / dist;
        const ny = dy / dist;
        const relVx = b.vx - a.vx;
        const relVy = b.vy - a.vy;
        const dot = relVx * nx + relVy * ny;
        if (dot < 0) {
          a.vx -= dot * nx;
          a.vy -= dot * ny;
          b.vx += dot * nx;
          b.vy += dot * ny;
        }

        // Spawn explosion particles for both planets
        spawnExplosion(particles, driftClusters, a.x, a.y, a.color, b.color);
        spawnExplosion(particles, driftClusters, b.x, b.y, b.color, a.color);

        // Separate planets
        const overlap = threshold - dist;
        a.x -= nx * overlap * 0.5;
        a.y -= ny * overlap * 0.5;
        b.x += nx * overlap * 0.5;
        b.y += ny * overlap * 0.5;
      }
    }
  }

  // Draw planets
  for (const p of planets) {
    if (p.exploding) continue;

    // Draw ring behind planet
    if (p.hasRing) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(1, p.ringAngle);
      const ringGrad = ctx.createRadialGradient(0, 0, p.radius * 1.1, 0, 0, p.radius * 2.2);
      const rgb = hexToRgb(p.color);
      ringGrad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`);
      ringGrad.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`);
      ringGrad.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
      ctx.beginPath();
      ctx.arc(0, 0, p.radius * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = ringGrad;
      ctx.fill();
      ctx.restore();
    }

    // Glow
    const rgb = hexToRgb(p.color);
    const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
    glowGrad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`);
    glowGrad.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = glowGrad;
    ctx.fill();

    // Planet body
    const bodyGrad = ctx.createRadialGradient(
      p.x - p.radius * 0.3,
      p.y - p.radius * 0.3,
      0,
      p.x,
      p.y,
      p.radius
    );
    bodyGrad.addColorStop(0, `rgba(${Math.min(rgb.r + 80, 255)}, ${Math.min(rgb.g + 80, 255)}, ${Math.min(rgb.b + 80, 255)}, 1)`);
    bodyGrad.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`);
    bodyGrad.addColorStop(1, `rgba(${Math.max(rgb.r - 60, 0)}, ${Math.max(rgb.g - 60, 0)}, ${Math.max(rgb.b - 60, 0)}, 1)`);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = bodyGrad;
    ctx.fill();
  }

  // Update & draw explosion particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const pt = particles[i];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.vx *= 0.97;
    pt.vy *= 0.97;
    pt.life--;
    if (pt.life <= 0) {
      particles.splice(i, 1);
      continue;
    }
    const alpha = pt.life / pt.maxLife;
    const rgb = hexToRgb(pt.color);
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, pt.radius * alpha, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    ctx.fill();
  }

  // Update & draw drift clusters
  for (let i = driftClusters.length - 1; i >= 0; i--) {
    const dc = driftClusters[i];
    dc.x += dc.vx;
    dc.y += dc.vy;
    dc.life--;
    if (dc.life <= 0) {
      driftClusters.splice(i, 1);
      continue;
    }
    const alpha = (dc.life / dc.maxLife) * 0.8;
    const rgb = hexToRgb(dc.color);
    const glowR = dc.radius * (1 + (1 - dc.life / dc.maxLife) * 0.5);
    const glow = ctx.createRadialGradient(dc.x, dc.y, 0, dc.x, dc.y, glowR);
    glow.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`);
    glow.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.4})`);
    glow.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
    ctx.beginPath();
    ctx.arc(dc.x, dc.y, glowR, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();
  }
}

function spawnExplosion(
  particles: Particle[],
  driftClusters: DriftCluster[],
  x: number,
  y: number,
  color1: string,
  color2: string
) {
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = rand(1, 5);
    const color = Math.random() > 0.5 ? color1 : color2;
    const maxLife = randInt(60, 90);
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color,
      life: maxLife,
      maxLife,
      radius: rand(1.5, 3.5),
    });
  }

  // Spawn 3-5 drift clusters
  const clusterCount = randInt(3, 5);
  for (let i = 0; i < clusterCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = rand(0.3, 1.2);
    const color = Math.random() > 0.5 ? color1 : color2;
    const maxLife = randInt(90, 180);
    driftClusters.push({
      x: x + rand(-10, 10),
      y: y + rand(-10, 10),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color,
      life: maxLife,
      maxLife,
      radius: rand(3, 8),
    });
  }
}

function drawSun(
  ctx: CanvasRenderingContext2D,
  frame: number,
  w: number,
  h: number
) {
  const cx = w / 2;
  const cy = h / 2;
  const orbitA = Math.min(w, h) * 0.45;
  const orbitB = orbitA * 0.5;
  const period = 50 * 60; // ~50 seconds at 60fps
  const t = (frame / period) * Math.PI * 2;

  const sx = cx + Math.cos(t) * orbitA;
  const sy = cy + Math.sin(t) * orbitB;

  // Opacity fades in bottom half of orbit
  const bottomFraction = (Math.sin(t) + 1) / 2; // 0 at top, 1 at bottom
  const opacity = 1 - bottomFraction * 0.7;

  // Outer faint glow
  const outerGlow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 90);
  outerGlow.addColorStop(0, `rgba(255, 200, 50, ${opacity * 0.08})`);
  outerGlow.addColorStop(0.5, `rgba(255, 160, 20, ${opacity * 0.04})`);
  outerGlow.addColorStop(1, `rgba(255, 120, 0, 0)`);
  ctx.beginPath();
  ctx.arc(sx, sy, 90, 0, Math.PI * 2);
  ctx.fillStyle = outerGlow;
  ctx.fill();

  // Warm mid glow
  const midGlow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 45);
  midGlow.addColorStop(0, `rgba(255, 220, 80, ${opacity * 0.35})`);
  midGlow.addColorStop(0.6, `rgba(255, 180, 30, ${opacity * 0.15})`);
  midGlow.addColorStop(1, `rgba(255, 140, 0, 0)`);
  ctx.beginPath();
  ctx.arc(sx, sy, 45, 0, Math.PI * 2);
  ctx.fillStyle = midGlow;
  ctx.fill();

  // Bright core
  const coreGlow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 18);
  coreGlow.addColorStop(0, `rgba(255, 255, 220, ${opacity})`);
  coreGlow.addColorStop(0.4, `rgba(255, 230, 100, ${opacity * 0.9})`);
  coreGlow.addColorStop(1, `rgba(255, 180, 0, 0)`);
  ctx.beginPath();
  ctx.arc(sx, sy, 18, 0, Math.PI * 2);
  ctx.fillStyle = coreGlow;
  ctx.fill();
}

function drawMoon(
  ctx: CanvasRenderingContext2D,
  frame: number,
  w: number,
  h: number
) {
  const cx = w / 2;
  const cy = h / 2;
  const orbitA = Math.min(w, h) * 0.42;
  const orbitB = orbitA * 0.48;
  const period = 50 * 60;
  // Moon is PI offset from sun
  const t = (frame / period) * Math.PI * 2 + Math.PI;

  const mx = cx + Math.cos(t) * orbitA;
  const my = cy + Math.sin(t) * orbitB;

  const moonRadius = 12;

  // Silver-blue glow
  const glow = ctx.createRadialGradient(mx, my, 0, mx, my, moonRadius * 2.5);
  glow.addColorStop(0, 'rgba(200, 215, 255, 0.25)');
  glow.addColorStop(0.5, 'rgba(160, 180, 230, 0.1)');
  glow.addColorStop(1, 'rgba(100, 120, 200, 0)');
  ctx.beginPath();
  ctx.arc(mx, my, moonRadius * 2.5, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  // Moon body
  const moonGrad = ctx.createRadialGradient(
    mx - moonRadius * 0.2,
    my - moonRadius * 0.2,
    0,
    mx,
    my,
    moonRadius
  );
  moonGrad.addColorStop(0, 'rgba(220, 230, 255, 1)');
  moonGrad.addColorStop(0.6, 'rgba(180, 195, 230, 1)');
  moonGrad.addColorStop(1, 'rgba(130, 150, 200, 1)');
  ctx.beginPath();
  ctx.arc(mx, my, moonRadius, 0, Math.PI * 2);
  ctx.fillStyle = moonGrad;
  ctx.fill();

  // Crescent shadow — dark circle offset to create illusion
  const shadowOffsetX = moonRadius * 0.45;
  const shadowOffsetY = moonRadius * 0.1;
  ctx.beginPath();
  ctx.arc(mx + shadowOffsetX, my + shadowOffsetY, moonRadius * 0.88, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(5, 5, 20, 0.92)';
  ctx.fill();
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    // Initialize all scene objects
    let stars = initStars(w, h);
    let shootingStars = initShootingStars(w, h);
    let comets = initComets(w, h);
    let asteroids = initAsteroids(w, h);
    let planets = initPlanets(w, h);
    const particles: Particle[] = [];
    const driftClusters: DriftCluster[] = [];

    let frame = 0;
    let rafId: number;

    function handleResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
      // Re-init stars and nebulas to fill new dimensions; preserve moving objects
      stars = initStars(w, h);
    }

    window.addEventListener('resize', handleResize);

    function draw() {
      if (!ctx) return;

      // Clear
      ctx.fillStyle = '#07070F';
      ctx.fillRect(0, 0, w, h);

      // Layer 1: Nebula clouds (fixed background depth)
      drawNebulaClouds(ctx, w, h);

      // Layer 2: Stars (static positions, twinkling)
      drawStars(ctx, stars, frame);

      // Layer 3: Comets (slow moving, wrapping)
      drawComets(ctx, comets, w, h);

      // Layer 4: Asteroids
      drawAsteroids(ctx, asteroids, w, h);

      // Layer 5: Sun
      drawSun(ctx, frame, w, h);

      // Layer 6: Moon
      drawMoon(ctx, frame, w, h);

      // Layer 7: Planets + particles + drift clusters
      drawPlanets(ctx, planets, particles, driftClusters, w, h);

      // Layer 8: Shooting stars (on top of everything)
      drawShootingStars(ctx, shootingStars, w, h, frame);

      frame++;
      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
