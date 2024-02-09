export const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: {
        source: "title",
      },
    },
    {
      name: "downloadLink",
      title: "DownloadLink",
      type: "url",
      validition: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
    name : 'category',
    title : "Category",
    type : 'string',
    validation : (Rule : any) => Rule.required(),
    options : {
      list : ["frontend" , "backend" , "next 13" , "fullstack" , "other"]
    }
    }
  ],
};
