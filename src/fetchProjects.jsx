import { createClient } from 'contentful';

const client = createClient({
  space: '4yts2s6194dp',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

client.getEntries({ content_type: 'projects' }).then((response) => {
  console.log(response);
});
