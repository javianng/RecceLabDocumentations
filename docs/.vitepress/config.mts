// .vitepress/config.js
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "RecceLabDocumentation",
  description: "Documentation page for Reccee Lab's Dashoard",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/8-installation-guide" },
      { text: "User Manual", link: "/7-user-manual" },
      { text: "Architecture", link: "/1-system-architecture" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Introduction", link: "/" }],
      },
      {
        text: "System Documentation",
        items: [
          { text: "1. System Architecture", link: "/1-system-architecture" },
          { text: "2. Data Flow", link: "/2-data-flow" },
          { text: "3. API Documentation", link: "/3-API-documentation" },
          { text: "4. Database Schema", link: "/4-database-schema" },
        ],
      },
      {
        text: "Model Documentation",
        items: [
          { text: "5a. ML Models", link: "/5a-model-documentation-ml" },
          {
            text: "5b. Statistical Models",
            link: "/5b-model-documentation-statistical",
          },
        ],
      },
      {
        text: "LLM Documentation",
        items: [
          { text: "6a. LLM Summary", link: "/6a-llm-summary" },
          { text: "6b. LLM Architecture", link: "/6b-llm-architecture" },
          { text: "6c. LLM API", link: "/6c-llm-api" },
          { text: "6d. LLM Utils", link: "/6d-llm-utils" },
          {
            text: "6e-1. LLM Query Processor",
            link: "/6e-1-llm-query-processor",
          },
          { text: "6e-2. Data Processor", link: "/6e-2-data-processor" },
          { text: "6e-3. Regular Generator", link: "/6e-3-regular-generator" },
          { text: "6e-4. Report Generator", link: "/6e-4-report-generator" },
        ],
      },
      {
        text: "User Documentation",
        items: [
          { text: "7. User Manual", link: "/7-user-manual" },
          { text: "8. Installation Guide", link: "/8-installation-guide" },
        ],
      },
      {
        text: "Operations",
        items: [
          {
            text: "9. Maintenance Documentation",
            link: "/9-maintenance-documentation",
          },
          {
            text: "10. Troubleshooting Guide",
            link: "/10-troubleshooting-guide",
          },
          {
            text: "10a. Security Architecture",
            link: "/10a-security-architecture",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
