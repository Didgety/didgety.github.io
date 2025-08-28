// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Some of my favorite projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-reading-nook",
          title: "Reading Nook",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-a-rusty-dns-server",
        
          title: "A Rusty DNS Server",
        
        description: "Capable of handling a variety of record types, using external resolvers, and recursively resolving queries",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/dns_server/";
          
        },
      },{id: "post-rusted-rogue-an-ascii-roguelike-game",
        
          title: "Rusted Rogue - An ASCII Roguelike Game",
        
        description: "Written using Rust, this game utilizes a variety of algorithms to procedurally generate levels",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/rusted_rogue/";
          
        },
      },{id: "post-chladni-plate-particle-simulation",
        
          title: "Chladni Plate Particle Simulation",
        
        description: "Visualizing some fun physics phenomena",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/chladni_plate_simulation/";
          
        },
      },{id: "post-quantum-computing-eavesdropping-detection-and-information-loss-in-optical-networks",
        
          title: "Quantum Computing - Eavesdropping Detection and Information Loss in Optical Networks",
        
        description: "Undergraduate research project as part of the Edmonds College Physics Department",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/qkd_research_project/";
          
        },
      },{id: "post-fourier-analysis-presentation",
        
          title: "Fourier Analysis Presentation",
        
        description: "A presentation given for the Western Washington Community College Student Mathematics Conference",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/fourier_analysis_presentation/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%65%69%6C%6C%65%75%78@%75%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Didgety", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jaiveilleux", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
