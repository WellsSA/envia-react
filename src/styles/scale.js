const fonts = {
  fontSize: '15px',
  iconFontSize: '33px',
  sectionTitleSize: '25px',
  titleFontSize: '18px',
  inputFontSize: '15px',
  labelFontSize: '15px',
  subMarkerFontSize: '13px',
};

const z_index = {
  sidebar: {
    main: 100,
    background: 99,
  },
  header: {
    main: 90,
  },
  profile: {
    main: 100,
    optionBar: 101,
    background: 99,
  },
  overlay: {
    main: 100,
    content: 101,
    loading: 110,
  },
};

const breakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export { fonts, z_index, breakpoints };
