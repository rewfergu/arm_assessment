import { css } from "@emotion/core";
export default css`
  /* latin */
  @font-face {
    font-family: "Calibri";
    font-style: italic;
    font-weight: 400;
    src: local("Calibri Italic"), local("Calibri-Italic"),
      url(https://fonts.gstatic.com/l/font?kit=J7adnpV-BGlaFfdAhLQo6btPMDoTpA&skey=36a3d5758e0e2f58&v=v10)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: "Calibri";
    font-style: italic;
    font-weight: 700;
    src: local("Calibri Bold Italic"), local("Calibri-BoldItalic"),
      url(https://fonts.gstatic.com/l/font?kit=J7aYnpV-BGlaFfdAhLQgUp5aHRgejiMIKQ&skey=8b00183e5f6700b6&v=v10)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    src: local("Calibri"),
      url(https://fonts.gstatic.com/l/font?kit=J7afnpV-BGlaFfdAhLEY67FIEjg&skey=a1029226f80653a8&v=v10)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 700;
    src: local("Calibri Bold"), local("Calibri-Bold"),
      url(https://fonts.gstatic.com/l/font?kit=J7aanpV-BGlaFfdAjAo9_pxqHxIZrCE&skey=cd2dd6afe6bf0eb2&v=v10)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  body {
    font-family: Calibri, sans-serif;
  }

  .App {
    h1 {
      max-width: 450px;
      margin: 2.5rem auto 0;
      font-size: 2.5rem;
      padding: 0 40px;
      color: #595959;
      text-align: center;
    }
  }
`;
