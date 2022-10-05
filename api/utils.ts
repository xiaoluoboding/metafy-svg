import got from 'got'
import { escape } from 'html-escaper'

const [defaultFrom, defaultVia, defaultTo] = ['#6EE7B7', '#3B82F6', '#7C3AED']

const stylishTwitterLikeCard = (payload: Record<string, any>) => {
  const {
    url,
    className,
    escapedTitle,
    escapedDesc,
    escapedAuthor,
    escapedPublisher,
    linearGradientStop,
    logoBase64,
    imageBase64
  } = payload

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
      font: 14px sans-serif;
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
  <g filter="url(#shadow_filter)" class="bookmark-bg">
    <rect width="480" height="384" rx="12" shape-rendering="crispEdges" />
  </g>

  <!-- Render the Title -->
  <foreignObject width="444" height="24" x="16" y="268">
    <body xmlns="http://www.w3.org/1999/xhtml" style="margin: 0">
      <p class="title truncate">
        ${escapedTitle}
      </p>
    </body>
  </foreignObject>

  <!-- Render the Description -->
  <foreignObject width="444" height="48" x="16" y="300">
    <body xmlns="http://www.w3.org/1999/xhtml" style="margin: 0">
      <p class="desc">
        ${escapedDesc}
      </p>
    </body>
  </foreignObject>

  <!-- Render the Author/Publisher -->
  <foreignObject width="444" height="48" x="40" y="352">
    <body xmlns="http://www.w3.org/1999/xhtml" style="margin: 0">
      <p class="author truncate">
        ${escapedAuthor || escapedPublisher || url}
      </p>
    </body>
  </foreignObject>

  <!-- Render the image -->
  <path d="M0 12C0 5.37258 5.37258 0 12 0H468C474.627 0 480 5.37258 480 12V256H0V12Z" fill="url(#metadata_image_pattern)" />

  <!-- Render the logo -->
  <rect x="16" y="354" width="16" height="16" fill="url(#metadata_logo_pattern)" />

  <g class="gradient-bg" filter="url(#gradient_filter)">
    <path d="M0 256H480V372C480 378.627 476.627 384 470 384H14C7.37257 384 0 378.627 0 372V256Z" fill="url(#gradient_linear_bg)" fill-opacity="0.33" />
  </g>

  <defs>
    <!-- gradient background -->
    <filter id="gradient_filter" x="-4" y="218" width="488" height="170" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" />
    </filter>
    <linearGradient id="gradient_linear_bg" x1="5.86389e-08" y1="303" x2="480" y2="303" gradientUnits="userSpaceOnUse">
      ${linearGradientStop}
    </linearGradient>

    <!-- background shadow -->
    <filter id="shadow_filter" x="0" y="0" width="484" height="388" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
      <use xlink:href="#metadata_image" transform="translate(-0.0333333) scale(0.000833333 0.0015625)" />
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

const stylishNotionLikeCard = (payload: Record<string, any>) => {
  const {
    url,
    className,
    escapedTitle,
    escapedDesc,
    escapedAuthor,
    escapedPublisher,
    linearGradientStop,
    logoBase64,
    imageBase64
  } = payload

  return `<svg id="bookmark_style_svg" class="${className}" width="720" height="128" viewBox="0 0 720 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
        font: bold 14px sans-serif;
      }

      .desc {
        font: 12px sans-serif;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .author {
        font: 12px sans-serif;
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
    <g filter="url(#shadow-filter)" class="bookmark-bg">
      <rect width="720" height="128" rx="12" shape-rendering="crispEdges" />
    </g>

    <!-- Render the Title -->
    <foreignObject width="432" height="24" x="16" y="16">
      <body xmlns="http://www.w3.org/1999/xhtml"  style="margin: 0">
        <p class="title truncate">
          ${escapedTitle}
        </p>
      </body>
    </foreignObject>

    <!-- Render the Description -->
    <foreignObject width="432" height="32" x="16" y="48">
      <body xmlns="http://www.w3.org/1999/xhtml"  style="margin: 0">
        <p class="desc">
          ${escapedDesc}
        </p>
      </body>
    </foreignObject>

    <!-- Render the Author/Publisher -->
    <foreignObject width="432" height="16" x="38" y="96">
      <body xmlns="http://www.w3.org/1999/xhtml"  style="margin: 0">
        <p class="author truncate">
          ${escapedAuthor || escapedPublisher || url}
        </p>
      </body>
    </foreignObject>

    <path d="M464 0H708C714.627 0 720 5.37258 720 12V116C720 122.627 714.627 128 708 128H464V0Z" fill="url(#metadata_image_pattern)" />

    <rect x="16" y="98" width="14" height="14" fill="url(#metadata_logo_pattern)" />

    <g style="mix-blend-mode:hard-light">
      <path d="M0 12C0 5.37258 5.37258 0 12 0H464V128H12C5.3726 128 0 122.627 0 116V12Z" fill="url(#gradient_linear_bg)" fill-opacity="0.33" />
    </g>

    <defs>
      <!-- shadow filter -->
      <filter id="shadow-filter" x="0" y="0" width="724" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_21"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_21" result="shape"/>
      </filter>

      <!-- picture pattern -->
      <pattern id="metadata_image_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#metadata_image" transform="translate(-0.00167224) scale(0.00083612 0.00167224)" />
      </pattern>

      <!-- logo pattern -->
      <pattern id="metadata_logo_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#metadata_logo" transform="scale(0.00390625)" />
      </pattern>

      <!-- gradient background -->
      <linearGradient id="gradient_linear_bg" x1="5.66843e-08" y1="64" x2="464" y2="64" gradientUnits="userSpaceOnUse">
        ${linearGradientStop}
      </linearGradient>

      <!-- picture base64 image -->
      <image id="metadata_image" width="1200" height="598" xlink:href="${imageBase64}" />
      <!-- logo base64 image -->
      <image id="metadata_logo" width="256" height="256" xlink:href="${logoBase64}" />
    </defs>
  </svg>
`
}

export const transformSVG = async (options: Record<string, any>) => {
  const {
    url,
    mode,
    style = 'vertical',
    metadata,
    fromColor,
    viaColor,
    toColor
  } = options

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

  const escapedTitle = metadata.title ? escape(metadata.title) : ''
  const escapedDesc = metadata.description ? escape(metadata.description) : ''
  const escapedAuthor = metadata.author ? escape(metadata.author) : ''
  const escapedPublisher = metadata.publisher ? escape(metadata.publisher) : ''

  const gradientFrom = fromColor ? `#${fromColor}` : defaultFrom
  const gradientVia = viaColor ? `#${viaColor}` : defaultVia
  const gradientTo = toColor ? `#${toColor}` : defaultTo

  const linearGradientStop = viaColor
    ? `<stop stop-color="${gradientFrom}" />
      <stop offset="0.5" stop-color="${gradientVia}" />
      <stop offset="1" stop-color="${gradientTo}" />`
    : `<stop stop-color="${gradientFrom}" />
      <stop offset="1" stop-color="${gradientTo}" />`

  const payload = {
    url,
    className,
    escapedTitle,
    escapedDesc,
    escapedAuthor,
    escapedPublisher,
    linearGradientStop,
    logoBase64,
    imageBase64
  }

  return style === 'vertical'
    ? stylishTwitterLikeCard(payload)
    : stylishNotionLikeCard(payload)
}
