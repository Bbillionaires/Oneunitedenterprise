// Solar-position-based theme for Eastern Time (New York, ~40.7°N)
// Returns progress: 0 = full day (light sky), 1 = full night (dark sky)

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  return Math.floor((date.getTime() - start.getTime()) / 86_400_000)
}

export function getSolarProgress(): number {
  const now = new Date()

  // Eastern Time hours (handles EST/EDT automatically)
  const etStr = now.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })
  const [hStr, mStr] = etStr.replace(/^24/, '0').split(':')
  const hours = parseInt(hStr, 10) + parseInt(mStr, 10) / 60

  // Seasonal variation based on NYC
  const etDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))
  const doy = getDayOfYear(etDate)
  // -1 at winter solstice (~day 355), +1 at summer solstice (~day 172)
  const seasonal = -Math.cos(((doy - 172) / 365) * 2 * Math.PI)

  // Sunrise: 7:30 AM (winter) → 5:30 AM (summer); base 6:30
  const sunriseHour = 6.5 - seasonal * 1.0
  // Sunset: 4:30 PM (winter) → 8:30 PM (summer); base 6:30 PM
  const sunsetHour = 18.5 + seasonal * 2.0

  const HALF_TRANSITION = 0.75 // 45-minute half-window each side

  if (hours >= sunriseHour + HALF_TRANSITION && hours <= sunsetHour - HALF_TRANSITION) {
    return 0 // full day
  }
  if (hours <= sunriseHour - HALF_TRANSITION || hours >= sunsetHour + HALF_TRANSITION) {
    return 1 // full night
  }
  if (hours < sunriseHour + HALF_TRANSITION) {
    // Sunrise: night (1) → day (0)
    const t = (hours - (sunriseHour - HALF_TRANSITION)) / (HALF_TRANSITION * 2)
    return 1 - t
  }
  // Sunset: day (0) → night (1)
  const t = (hours - (sunsetHour - HALF_TRANSITION)) / (HALF_TRANSITION * 2)
  return Math.max(0, Math.min(1, t))
}
