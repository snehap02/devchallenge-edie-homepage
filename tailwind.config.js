/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        firstfont: 'Heebo',
        secondfont: 'Poppins',
        thirdfont: 'Montserrat'
      },
      colors:{
        logoColor: '#333333',
        firstText: '#2D9CDB',
        secondSection: '#4F4F4F',
        emailLabel: '#828282',
        emailPlaceholder: '#BDBDBD',
        joinBtn: '#F2F2F2',
        joinBtnBg: '#2D9CDB',
        button: '#E0E0E0',
        green: '#27AE60',
        red: '#EB5757',
        footer: '#100E1D'
      },
      width:{
        secondsectionHead: '14rem',
        emailwidth: '22rem',
        firstsectionmd: '550px',
        lastwidth: '900px',
        middlewidth: '19rem'
      },
      margin:{
        left: '0.85rem',
        marginleftone:'20rem',
        marginlefttwo: '30rem'
      },
      borderRadius:{
        border: '2.5rem'
      }
    },
  },
  plugins: [],
}
