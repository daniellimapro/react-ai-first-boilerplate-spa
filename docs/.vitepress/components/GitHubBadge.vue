<template>
  <a
    href="https://github.com/daniellimapro"
    target="_blank"
    rel="noopener noreferrer"
    class="github-badge"
  >
    <img
      src="https://github.com/daniellimapro.png"
      alt="daniellimapro"
      class="github-badge__avatar"
    />
    <span class="github-badge__label">daniellimapro</span>
  </a>
</template>

<style scoped>
.github-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px 4px 4px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
  margin-right: 8px;
}

.github-badge:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.github-badge__avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
