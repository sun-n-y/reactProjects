import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
  space: '4yts2s6194dp',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projectsArray = response.items.map((item) => {
        const { url, title, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, img, url, id };
      });

      setProjects(projectsArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, loading };
};

export default useFetchProjects;
