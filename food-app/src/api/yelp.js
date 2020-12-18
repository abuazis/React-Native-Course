import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer 0NlDSUiLhKcxAkbJjzMmvgukrwKnNr1B80X2Ep8EGlMH_7PdKAnC5pzmA6jK_dRAYhtODZgTRgAlmmY2VGSNX7h-pmyJgXSyqqW81uunQsyUulZHsdMMzMgxnPq-X3Yx",
  },
});
