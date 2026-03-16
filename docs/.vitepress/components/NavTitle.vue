<template>
  <span class="nav-title">React AI First<span class="nav-title__cursor">_</span></span>
</template>

<style scoped>
.nav-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.nav-title__cursor {
  display: inline-block;
  animation: blink 1s step-end infinite;
  color: var(--vp-c-brand-1);
  margin-left: 1px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
