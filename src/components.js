import React from 'react'
import {
  bool,
  string,
  number,
  oneOf,
} from 'prop-types'
import {
  space,
  fontSizes,
  weights,
  colors,
} from './theme'
import {
  idx,
  px,
  color,
  darken,
  baseKey,
  caps,
  align,
} from './util'
import DonutBase from './DonutBase'

const components = [
  // Buttons
  {
    name: 'Button',
    tag: 'button',
    props: {
      f: 1,
      m: 0,
      px: 3,
      py: 2,
      color: 'white',
    },
    style: props => ({
      display: 'inline-block',
      fontFamily: 'inherit',
      fontWeight: idx('weights.1', props.theme),
      lineHeight: 1.25,
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: px(props.theme.radius),
      border: 0,
      appearance: 'none',
      backgroundColor: color(props)(props.bg),
      '&:hover': {
        backgroundColor: color(props)(props.bg, 6),
      },
      '&:focus': {
        outline: 0,
        boxShadow: `0 0 0 2px ${color(props)(props.bg, 3)}`
      },
      '&:active': {
        backgroundColor: color(props)(props.bg, 6),
        boxShadow: `inset 0 0 8px ${color(props)(props.bg, 9)}`
      },
      '&:disabled': {
        opacity: 1/4
      },
    })
  },
  {
    name: 'ButtonOutline',
    tag: 'Button',
    props: {
      color: 'blue',
      bg: 'transparent'
    },
    style: props => ({
      boxShadow: `inset 0 0 0 2px`,
      '&:hover': {
        color: color(props)(props.color, 8),
        backgroundColor: 'transparent'
      },
      '&:focus': {
        boxShadow: `inset 0 0 0 2px, 0 0 0 2px ${color(props)(props.color, 3)}`
      },
      '&:active': {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px, inset 0 0 8px ${color(props)(props.color, 9)}`
      }
    })
  },
  {
    name: 'ButtonCircle',
    tag: 'Button',
    props: {
      px: 3
    },
    style: props => ({
      borderRadius: px(99999)
    })
  },
  {
    name: 'ButtonTransparent',
    tag: 'Button',
    props: {
      color: 'inherit',
      bg: 'transparent'
    },
    style: props => ({
      '&:hover': {
        color: color(props)(props.color, 8),
        backgroundColor: 'transparent'
      },
      '&:focus': {
        boxShadow: `inset 0 0 0 2px, 0 0 0 2px ${color(props)(props.color, 3)}`
      },
      '&:active': {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px, inset 0 0 8px ${color(props)(props.color, 9)}`
      }
    })
  },
  {
    name: 'Link',
    tag: 'a',
    props: {
      color: 'blue'
    },
    style: props => ({
      '&:hover': {
        color: color(props)(props.color, 8)
      }
    })
  },
  {
    name: 'NavLink',
    tag: 'a',
    props: {
      f: 1,
      p: 2
    },
    style: props => ({
      display: 'inline-block',
      fontWeight: idx('weights.1', props.theme),
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: 'inherit',
      backgroundColor: props.active ? darken(1/4) : null,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: darken(1/16)
      },
      '&:disabled': {
        opacity: 1/4
      },
    }),
    propTypes: {
      active: bool
    }
  },
  {
    name: 'BlockLink',
    tag: 'a',
    props: {},
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
    }
  },

  // Typography
  {
    name: 'Text',
    tag: 'p',
    props: {
      m: 0
    },
    style: props => Object.assign({
      textAlign: align(props),
      fontWeight: props.bold ? idx('weights.1', props.theme) : idx('weights.0', props.theme)
    }, caps(props)),
    propTypes: {
      left: bool,
      center: bool,
      right: bool,
      justify: bool,
      bold: bool,
      caps: bool
    }
  },
  {
    name: 'Heading',
    tag: 'Text',
    props: {
      is: 'h2',
      f: 5,
      m: 0,
      bold: true
    },
    style: {
      lineHeight: 1.25
    },
    propTypes: {
      left: bool,
      center: bool,
      right: bool,
      justify: bool,
      bold: bool,
      caps: bool
    }
  },
  {
    name: 'Subhead',
    tag: 'Heading',
    props: {
      is: 'h3',
      f: 4,
      m: 0,
    },
    style: {}
  },
  {
    name: 'Small',
    tag: 'Text',
    props: {
      is: 'small',
      f: 0
    },
    style: {}
  },
  {
    name: 'Lead',
    tag: 'Text',
    props: {
      is: 'p',
      f: 3,
      m: 0
    },
    style: {
      lineHeight: 1.25
    }
  },
  {
    name: 'Pre',
    tag: 'pre',
    props: {
      f: 1,
      m: 0,
    },
    style: props => ({
      fontFamily: props.theme.monospace,
      overflow: 'auto'
    })
  },
  {
    name: 'Code',
    tag: 'code',
    props: {
      f: 1,
    },
    style: props => ({
      fontFamily: props.theme.monospace
    })
  },
  {
    name: 'Samp',
    tag: 'Code',
    props: {
      is: 'samp'
    },
    style: {}
  },
  {
    name: 'Blockquote',
    tag: 'Text',
    props: {
      is: 'blockquote',
      m: 0,
      f: 3,
    },
    style: {}
  },

  // Forms
  {
    name: 'Label',
    tag: 'label',
    props: {
      f: 1,
      mb: 1
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  {
    name: 'Input',
    tag: 'input',
    props: {
      type: 'text',
      p: 1,
      m: 0,
      w: 1,
      color: 'inherit',
      bg: 'transparent'
    },
    style: props => ({
      fontFamily: 'inherit',
      fontSize: 'inherit',
      borderWidth: px(1),
      borderStyle: 'solid',
      borderColor: color(props)('gray', 2),
      borderRadius: px(props.theme.radius),
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        borderColor: color(props)('blue')
      },
      '&:disabled': {
        opacity: 1/4
      },
    })
  },
  {
    name: 'Select',
    tag: 'select',
    props: {
      p: 1,
      m: 0,
      w: 1,
      color: 'inherit',
      bg: 'transparent'
    },
    style: props => ({
      fontFamily: 'inherit',
      fontSize: 'inherit',
      height: 32,
      borderWidth: px(1),
      borderStyle: 'solid',
      borderColor: color(props)('gray', 2),
      borderRadius: px(props.theme.radius),
      '&:focus': {
        outline: 'none',
        borderColor: color(props)('blue'),
      },
      '&:disabled': {
        opacity: 1/4
      },
    })
  },
  {
    name: 'Textarea',
    tag: 'textarea',
    props: {
      p: 1,
      m: 0,
      w: 1,
      color: 'inherit',
      bg: 'transparent'
    },
    style: props => ({
      fontFamily: 'inherit',
      fontSize: 'inherit',
      borderWidth: px(1),
      borderStyle: 'solid',
      borderColor: color(props)('gray', 2),
      borderRadius: px(props.theme.radius),
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        borderColor: color(props)('blue'),
      },
      '&:disabled': {
        opacity: 1/4
      },
    })
  },
  {
    name: 'Checkbox',
    tag: 'input',
    props: {
      type: 'checkbox',
      mr: 1
    },
    style: props => ({})
  },
  {
    name: 'Radio',
    tag: 'input',
    props: {
      type: 'radio',
      mr: 1
    },
    style: props => ({})
  },
  {
    name: 'Slider',
    tag: 'input',
    props: {
      w: 1,
      my: 2,
      mx: 0,
      type: 'range'
    },
    style: props => ({
      display: 'block',
      height: px(idx('space.1', props.theme)),
      cursor: 'pointer',
      color: 'inherit',
      borderRadius: px(99999),
      backgroundColor: color(props)('gray', 2),
      appearance: 'none',
      '&::-webkit-slider-thumb': {
        width: px(16),
        height: px(16),
        backgroundColor: 'currentcolor',
        border: 0,
        borderRadius: px(99999),
        appearance: 'none'
      },
      '&:focus': {
        '&::-webkit-slider-thumb': {
        }
      }
    })
  },

  {
    name: 'Image',
    tag: 'img',
    props: {},
    style: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    }
  },
  {
    name: 'Avatar',
    tag: 'img',
    props: {},
    style: props => ({
      display: 'inline-block',
      width: px(props.size || 48),
      height: px(props.size || 48),
      borderRadius: px(99999)
    }),
    propTypes: {
      size: number
    }
  },

  {
    name: 'BackgroundImage',
    tag: 'div',
    props: {
      w: 1,
      // ratio: 3/4 // How does styled-components handle this??
    },
    style: props => ({
      backgroundImage: props.src ? `url(${props.src})` : null,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 0,
      paddingBottom: ((props.ratio || 3/4) * 100) + '%'
    }),
    propTypes: {
      src: string,
      ratio: number
    }
  },

  // Layout
  {
    name: 'Container',
    tag: 'div',
    props: {
      px: 3,
      mx: 'auto'
    },
    style: props => ({
      maxWidth: px(props.width || idx('maxWidth', props.theme) || 1024),
      width: 'auto'
    }),
    propTypes: {
      width: number
    }
  },
  {
    name: 'Divider',
    tag: 'hr',
    props: {
      my: 2
    },
    style: {
      border: 0,
      borderBottomWidth: px(1),
      borderBottomStyle: 'solid',
    }
  },
  {
    name: 'Border',
    tag: 'div',
    props: {},
    style: props => {
      const w = px(props.borderWidth || 1)
      const borderWidth = (!props.top && !props.right && !props.bottom && !props.left) ? w : null
      const directions = borderWidth ? null : {
        borderTopWidth: props.top ? w : 0,
        borderRightWidth: props.right ? w : 0,
        borderBottomWidth: props.bottom ? w : 0,
        borderLeftWidth: props.left ? w : 0,
      }

      return Object.assign({
        borderWidth,
        borderStyle: 'solid',
        borderColor: color(props)(props.color || 'gray', 2),
        color: 'inherit'
      }, directions)
    },
    propTypes: {
      top: bool,
      right: bool,
      bottom: bool,
      left: bool,
      width: number,
      color: string,
    }
  },
  {
    name: 'Media',
    tag: 'div',
    props: {},
    style: props => ({
      display: 'flex',
      alignItems: 'center'
    })
  },

  {
    name: 'Card',
    tag: 'div',
    props: {
      bg: 'white'
    },
    style: props => ({
      overflow: 'hidden',
      boxShadow: `inset 0 0 0 1px ${color(props)('gray', 2)}, 0 0 4px ${color(props)('gray', 2)}`,
      borderRadius: px(props.theme.radius)
    })
  },
  {
    name: 'Banner',
    tag: 'div',
    props: {
      p: [ 3, 4 ]
    },
    style: props => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : null,
    }),
    propTypes: {
      backgroundImage: string
    }
  },
  {
    name: 'Panel',
    tag: 'div',
    props: {},
    style: props => ({
      overflow: 'hidden',
      borderRadius: px(props.theme.radius),
      borderWidth: px(1),
      borderStyle: 'solid',
    })
  },
  {
    name: 'PanelHeader',
    tag: 'header',
    props: {
      f: 2,
      p: 2,
    },
    style: props => ({
      fontWeight: idx('weights.1', props.theme),
      borderBottomWidth: px(1),
      borderBottomStyle: 'solid',
    })
  },
  {
    name: 'PanelFooter',
    tag: 'footer',
    props: {
      f: 1,
      p: 2,
    },
    style: props => ({
      fontWeight: idx('weights.1', props.theme),
      borderTopWidth: px(1),
      borderTopStyle: 'solid',
    })
  },

  // UI
  {
    name: 'Progress',
    tag: 'progress',
    props: {
      w: 1,
      m: 0
    },
    style: props => ({
      display: 'block',
      height: px(idx('space.1', props.theme)),
      backgroundColor: color(props)('gray', 2),
      borderRadius: px(props.theme.radius),
      overflow: 'hidden',
      appearance: 'none',
      '&::-webkit-progress-bar': {
        backgroundColor: color(props)('gray', 2)
      },
      '&::-webkit-progress-value': {
        backgroundColor: color(props)(props.color)
      },
      '&::-moz-progress-bar': {
        backgroundColor: color(props)(props.color)
      }
    })
  },
  {
    name: 'Message',
    tag: 'div',
    props: {
      px: 3,
      py: 2,
      color: 'white',
      bg: 'blue'
    },
    style: props => ({
      fontWeight: idx('weights.1', props.theme)
    })
  },
  {
    name: 'Group',
    tag: 'div',
    props: {},
    style: props => {
      const R = px(props.theme.radius || 4)
      return {
        '& > *': {
          borderRadius: 0
        },
        '& > *:first-child': {
          borderRadius: `${R} 0 0 ${R}`

        },
        '& > *:last-child': {
          borderRadius: `0 ${R} ${R} 0`
        },
      }
    }
  },

  {
    name: 'Toolbar',
    tag: 'div',
    props: {
      px: 2,
      color: 'white',
      bg: 'gray9'
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  },

  {
    name: 'Badge',
    tag: 'div',
    props: {
      f: 0,
      p: 1,
      mx: 1,
      color: 'white',
      bg: 'blue'
    },
    style: props => ({
      fontWeight: idx('weights.1', props.theme),
      display: 'inline-block',
      verticalAlign: 'middle',
      borderRadius: px(props.theme.radius)
    })
  },
  {
    name: 'Circle',
    tag: 'Badge',
    props: {
      color: 'white',
      bg: 'blue'
    },
    style: props => ({
      textAlign: 'center',
      width: px(props.size || 24),
      height: px(props.size || 24),
      borderRadius: px(99999)
    })
  },
  {
    name: 'Overlay',
    tag: 'div',
    props: {
      p: 3,
      bg: 'white'
    },
    style: props => ({
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100vw',
      maxHeight: '100vh',
      overflow: 'auto',
      borderRadius: px(props.theme.radius),
      boxShadow: `0 0 0 60vmax ${darken(1/2)}, 0 0 32px ${darken(1/4)}`,
    })
  },

  {
    name: 'Tabs',
    tag: 'div',
    props: {},
    style: props => ({
      display: 'flex',
      borderBottomWidth: px(1),
      borderBottomStyle: 'solid',
      borderColor: color(props)('gray', 2)
    })
  },
  {
    name: 'TabItem',
    tag: 'a',
    props: {
      f: 1,
      mr: 3,
      py: 2,
    },
    style: props => ({
      textDecoration: 'none',
      fontWeight: idx('weights.1', props.theme),
      color: props.active ? color(props)('blue') : 'inherit',
      borderBottomWidth: props.active ? 2 : 0,
      borderBottomStyle: 'solid',
      '&:hover': {
        color: color(props)('blue'),
      }
    }),
    propTypes: {
      active: bool
    }
  },

  {
    name: 'DotButton',
    tag: 'button',
    props: {
      m: 0,
    },
    style: props => ({
      padding: 0,
      width: px(idx('space.3', props.theme)),
      height: px(idx('space.3', props.theme)),
      borderWidth: px(4),
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundClip: 'padding-box',
      borderRadius: px(99999),
      backgroundColor: props.active ? 'currentcolor' : darken(1/4),
      appearance: 'none',
      '&:hover': {
        backgroundColor: color(props)('blue'),
      },
      '&:focus': {
        backgroundColor: color(props)('blue'),
      },
      '&:disabled': {
        opacity: 1/4
      }
    }),
    propTypes: {
      active: bool
    }
  },

  {
    name: 'Relative',
    tag: 'div',
    props: {},
    style: props => ({
      position: 'relative',
      zIndex: props.z
    })
  },
  {
    name: 'Absolute',
    tag: 'div',
    props: {},
    style: props => ({
      position: 'absolute',
      top: props.top ? 0 : null,
      right: props.right ? 0 : null,
      bottom: props.bottom ? 0 : null,
      left: props.left ? 0 : null,
      zIndex: props.z
    }),
    propTypes: {
      top: bool,
      right: bool,
      bottom: bool,
      left: bool,
      z: number
    }
  },
  {
    name: 'Fixed',
    tag: 'div',
    props: {},
    style: props => ({
      position: 'fixed',
      top: props.top ? 0 : null,
      right: props.right ? 0 : null,
      bottom: props.bottom ? 0 : null,
      left: props.left ? 0 : null,
      zIndex: props.z
    }),
    propTypes: {
      top: bool,
      right: bool,
      bottom: bool,
      left: bool,
      z: number
    }
  },
  {
    name: 'Sticky',
    tag: 'div',
    props: {},
    style: props => (`
      position: -webkit-sticky;
      position: sticky;
      top: ${props.top ? 0 : null};
      right: ${props.right ? 0 : null};
      bottom: ${props.bottom ? 0 : null};
      left: ${props.left ? 0 : null};
      z-index: ${props.z};
    `),
    propTypes: {
      top: bool,
      right: bool,
      bottom: bool,
      left: bool,
      z: number
    }
  },
  {
    name: 'Drawer',
    tag: 'Fixed',
    props: {
      bg: 'white',
      size: 320,
    },
    style: props => {
      const position = props.position || 'left'
      const size = props.size || 320
      const h = /^(left|right)$/.test(position) ? 1 : 0
      const width = h ? px(size) : null
      const height = h ? null : px(size)
      let transform
      const transforms = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        top: 'translateY(-100%)',
        bottom: 'translateY(100%)',
      }
      if (!props.open) transform = transforms[position]

      const top = /^(top|left|right)$/.test(position) ? 0 : null
      const bottom = /^(bottom|left|right)$/.test(position) ? 0 : null
      const left = /^(left|top|bottom)$/.test(position) ? 0 : null
      const right = /^(right|top|bottom)$/.test(position) ? 0 : null

      return {
        top,
        bottom,
        left,
        right,
        width,
        height,
        transform,
        overflowX: 'hidden',
        overflowY: 'auto',
        transitionProperty: 'transform',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out'
      }
    },
    propTypes: {
      size: number,
      position: oneOf([
        'top',
        'right',
        'bottom',
        'left',
      ])
    }
  },

  {
    name: 'Carousel',
    tag: 'div',
    props: {
    },
    style: props => ({
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '& > div:first-child': {
        marginLeft: (props.index * -100) + '%',
        transitionProperty: 'margin',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out'
      }
    }),
    propTypes: {
      index: number
    }
  },
  {
    name: 'ScrollCarousel',
    tag: 'div',
    props: {},
    style: props => ({
      width: '100%',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      scrollSnapPointsX: 'repeat(100%)',
      scrollSnapType: 'mandatory',
      scrollSnapDestination: '0% 100%',
    })
  },
  {
    name: 'CarouselSlide',
    tag: 'div',
    props: {
      w: 1,
      p: 3
    },
    style: props => ({
      display: 'inline-block',
      verticalAlign: 'middle'
    })
  },

  {
    name: 'Tooltip',
    tag: 'div',
    props: {
      color: 'white',
      bg: 'black'
    },
    style: props => ({
      display: 'inline-block',
      position: 'relative',
      color: 'inherit',
      backgroundColor: 'transparent',
      '&::before': {
        display: 'none',
        content: `"${props.text}"`,
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, -4px)',
        whiteSpace: 'nowrap',
        fontSize: px(idx('fontSizes.0', props.theme)),
        paddingTop: px(idx('space.1', props.theme)),
        paddingBottom: px(idx('space.1', props.theme)),
        paddingLeft: px(idx('space.2', props.theme)),
        paddingRight: px(idx('space.2', props.theme)),
        color: color(props)(props.color),
        backgroundColor: color(props)(props.bg),
        borderRadius: px(props.theme.radius),
      },
      '&::after': {
        display: 'none',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, 8px)',
        content: '" "',
        borderWidth: px(6),
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderTopColor: color(props)(props.bg),
      },
      '&:hover': {
        '&::before, &::after': {
          display: 'block'
        },
      }
    })
  },

  {
    name: 'Switch',
    tag: 'div',
    props: {
      role: 'checkbox',
      color: 'blue'
    },
    style: props => ({
      display: 'inline-flex',
      width: px(32),
      height: px(20),
      borderRadius: px(9999),
      backgroundColor: props.checked ? color(props)(props.color) : 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      transitionProperty: 'background-color',
      transitionDuration: '.2s',
      transitionTimingFunction: 'ease-out',
      '&::after': {
        content: '" "',
        width: px(12),
        height: px(12),
        margin: px(4),
        borderRadius: px(9999),
        transitionProperty: 'transform, color',
        transitionDuration: '.1s',
        transitionTimingFunction: 'ease-out',
        transform: props.checked ? `translateX(12px)` : `translateX(0)`,
        backgroundColor: props.checked ? idx('colors.white', props.theme) : color(props)(props.color),
      }
    })
  },

  {
    name: 'Close',
    tag: 'ButtonTransparent',
    props: {
      p: 0,
      f: 3,
      children: '×'
    },
    style: props => ({
      lineHeight: 1,
      width: px(24),
      height: px(24)
    })
  },

  {
    name: 'Star',
    tag: 'div',
    props: {
      f: 3,
      color: 'yellow',
      children: props => props.checked ? '★' : '☆'
    },
    style: props => ({
      position: 'relative',
      width: '1em',
      height: '1em',
      '&::after': {
        display: props.half ? 'block' : 'none',
        content: '"★"',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '1em',
        height: '1em',
        clip: 'rect(0, .45em, 1em, 0)'
      }
    })
  },

  {
    name: 'Arrow',
    tag: 'div',
    props: {},
    style: props => ({
      display: 'inline-block',
      width: 0,
      height: 0,
      verticalAlign: 'middle',
      borderRight: '.3125em solid transparent',
      borderLeft: '.3125em solid transparent',
      borderTop: props.direction === 'down' ? '.4375em solid' : null,
      borderBottom: props.direction === 'up' ? '.4375em solid' : null
    }),
    propTypes: {
      direction: oneOf([ 'up', 'down' ])
    },
    defaultProps: {
      direction: 'down'
    }
  },

  {
    name: 'Embed',
    tag: 'div',
    props: {},
    style: props => ({
      position: 'relative',
      height: 0,
      padding: 0,
      paddingBottom: `${(props.ratio || 9 / 16) * 100}%`,
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0
      }
    })
  },

  {
    name: 'Donut',
    tag: DonutBase,
    props: {
      color: 'blue',
      strokeWidth: 2,
      value: 1
    },
    style:  {}
  },
]

export default components
