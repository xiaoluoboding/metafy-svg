import got from 'got'

export const transformSVG = async (options: Record<string, any>) => {
  const { mode, metadata } = options

  const className = mode === 'dark' ? 'dark' : 'light'

  const logoReq = got(metadata.logo)
  const imageReq = got(metadata.image)

  const [logoRes, logoBuffer, imageRes, imageBuffer] = await Promise.all([
    logoReq,
    logoReq.buffer(),
    imageReq,
    imageReq.buffer()
  ])
  const logoBase64 = `data:${
    logoRes.headers['content-type']
  };base64,${logoBuffer.toString('base64')}`
  const imageBase64 = `data:${
    imageRes.headers['content-type']
  };base64,${imageBuffer.toString('base64')}`

  return `<svg id="bookmark_style_svg" class="${className}" width="480" height="384" viewBox="0 0 480 384" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
    .truncate {
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title,
    .desc,
    .author {
      color: #000000;
      margin: 0;
    }

    .title {
      font: bold 16px sans-serif;
    }

    .desc {
      font: 14px sans-serif;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .author {
      font: 16px sans-serif;
    }

    .bookmark-bg {
      fill: rgba(255, 255, 255, .33);
    }

    .gradient-bg {
      mix-blend-mode: darken;
    }

    .dark .bookmark-bg {
      fill: rgba(30, 41, 59, .88);
    }

    .dark .gradient-bg {
      mix-blend-mode: saturate;
    }
    
    .dark .title,
    .dark .desc,
    .dark .author {
      color: #ffffff;
    }
  </style>

  <!-- Render the background with shadow -->
  <g filter="url(#filter0_d_0_1)" class="bookmark-bg">
    <rect width="480" height="384" rx="12" shape-rendering="crispEdges" />
  </g>

  <!-- Render the Title -->
  <foreignObject width="444" height="24" x="16" y="240">
    <p class="title truncate">
      ${metadata.title}
    </p>
  </foreignObject>

  <!-- Render the Description -->
  <foreignObject width="444" height="48" x="16" y="280">
    <p class="desc">
      ${metadata.description}
    </p>
  </foreignObject>

  <!-- Render the Author/Publisher -->
  <foreignObject width="444" height="48" x="40" y="344">
    <p class="author truncate">
      ${metadata.author || metadata.publisher}
    </p>
  </foreignObject>

  <!-- Render the image -->
  <path d="M0 12C0 5.37259 5.37258 0 12 0H468C474.627 0 480 5.37258 480 12V223H0V12Z" fill="url(#metadata_image_pattern)" />

  <!-- Render the logo -->
  <rect x="16" y="348" width="16" height="16" fill="url(#metadata_logo_pattern)" />

  <g class="gradient-bg" filter="url(#filter0_b_0_1)">
    <path d="M0 222H480V372C480 378.627 474.627 384 468 384H12C5.37257 384 0 378.627 0 372V222Z" fill="url(#paint0_linear_0_1)" fill-opacity="0.33" />
  </g>

  <defs>
    <!-- gradient background -->
    <filter id="filter0_b_0_1" x="-4" y="218" width="488" height="170" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" />
    </filter>
    <linearGradient id="paint0_linear_0_1" x1="5.86389e-08" y1="303" x2="480" y2="303" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6EE7B7" />
      <stop offset="0.5" stop-color="#3B82F6" />
      <stop offset="1" stop-color="#7C3AED" />
    </linearGradient>

    <!-- background shadow -->
    <filter id="filter0_d_0_1" x="0" y="0" width="484" height="388" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="2" />
      <feGaussianBlur stdDeviation="1" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
    </filter>

    <!-- picture pattern -->
    <pattern id="metadata_image_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#metadata_image" transform="translate(0 -0.0381166) scale(0.00078125 0.00168161)" />
    </pattern>

    <!-- logo pattern -->
    <pattern id="metadata_logo_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#metadata_logo" transform="scale(0.0078125)" />
    </pattern>

    <!-- logo base64 image -->
    <image id="metadata_logo" width="128" height="128" xlink:href="${logoBase64}" />
    <!-- picture base64 image -->
    <image id="metadata_image" width="1280" height="640" xlink:href="${imageBase64}" />
  </defs>
</svg>
  `
}
