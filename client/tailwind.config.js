module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#006C9E',
        blue2: '#004A6E',
        blue3: '#E2EBF3',
        blue4: '#F3F8FA',
        gray1: '#333333',
        gray2: '#4F4F4F',
        gray3: '#828282',
        gray4: '#3B3B3B',
        gray5: '#E0E0E0',
        darkGray: '#676767',
        lightGray: '#979797',
        white: '#FFFFFF',
        red1: '#D64B3A',
        red2: '#F9E4E1',
        orange1: '#F8921F',
        orange2: '#FAE7D1',
        green1: '#179D57',
        green2: '#DCFAEA',
        blueOverlay: '#004A6E80'
      },
      fontFamily: {
        proxima: 'Proxima Nova'
      },
      screens: {
        medium: '768px',
        large: '1440px'
      }
    }
  },
  plugins: [
    // base styles
    require('./tailwind/plugins/base')(),

    // components
    require('./tailwind/plugins/components/button')(),
    require('./tailwind/plugins/components/checkboxInput')(),
    require('./tailwind/plugins/components/dropdownInput')(),
    require('./tailwind/plugins/components/textInput')(),
    require('./tailwind/plugins/components/toggleInput')(),
    require('./tailwind/plugins/components/visuallyHidden')(),

    // utilities
    require('./tailwind/plugins/utilities/required')()
  ]
}
