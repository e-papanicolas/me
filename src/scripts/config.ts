export default {
  logo_url: "logo.png",
  // backend: {
  //   name: "proxy",
  //   proxy_url: "http://localhost:8081/api/v1",
  // },
  local_backend: true,
  media_folder: "src/assets",
  public_folder: "assets",
  media_library: {
    max_file_size: 512000,
    folder_support: true,
  },
  collections: [
    {
      name: "project",
      label: "Projects",
      label_singular: "Project",
      folder: "src/content/projects/",
      format: "frontmatter",
      create: true,
      identifier_field: "title",
      summary: "{{title}} ({{date | date('MMM DD, YYYY')}})",
      summary_fields: ["title", "date", "tag"],
      sortable_fields: {
        fields: ["title", "date"],
        default: {
          field: "date",
          direction: "Descending",
        },
      },
      editor: {
        preview: false,
        frame: false,
      },
      fields: [
        {
          name: "tag",
          label: "Tags",
          multiple: true,
          widget: "relation",
          collection: "settings",
          max: 2,
          file: "project",
          search_fields: ["project_tags.*"],
          display_fields: ["project_tags.*"],
          value_field: "project_tags.*",
        },
        {
          name: "title",
          label: "Title",
          widget: "string",
        },
        {
          name: "image",
          label: "Image",
          widget: "image",
          required: false,
        },
        {
          name: "date",
          label: "Publish Date",
          widget: "datetime",
          format: "yyyy-MM-dd",
          date_format: "yyyy-MM-dd",
          time_format: false,
        },
        {
          name: "github",
          label: "Github",
          widget: "string",
          required: false,
        },
        {
          name: "isWIP",
          label: "Is Work In Progress",
          widget: "boolean",
          default: false,
        },
        {
          name: "website",
          label: "Website",
          widget: "string",
          required: false,
        },
        {
          name: "email",
          label: "Email",
          widget: "string",
          required: false,
        },
        {
          name: "demo",
          label: "Demo",
          widget: "string",
          required: false,
        },
        {
          name: "body",
          label: "Body",
          widget: "markdown",
        },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      delete: false,
      editor: {
        preview: false,
        frame: false,
      },
      files: [
        {
          name: "general",
          label: "General Site Settings",
          file: "src/content/settings/general.json",
          description: "General site settings",
          fields: [
            {
              name: "url",
              label: "URL",
              widget: "string",
              hint: "Do not enter the trailing slash of the URL",
            },
            {
              name: "title",
              label: "Site title",
              widget: "string",
            },
            {
              name: "description",
              label: "Site description",
              widget: "string",
            },
            {
              name: "logo",
              label: "Site Logo",
              widget: "image",
            },
            {
              name: "keywords",
              label: "Site keywords",
              widget: "list",
              summary: "{{fields.keyword}}",
              fields: [
                {
                  name: "keyword",
                  label: "Keyword",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          name: "project",
          label: "Project",
          file: "src/content/settings/project.json",
          fields: [
            {
              name: "project_tags",
              label: "Tags",
              label_singular: "Tag",
              widget: "list",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
