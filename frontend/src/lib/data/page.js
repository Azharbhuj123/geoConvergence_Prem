export const pageData = {
  blogPage: {
    posts: [
      {
        id: 1,
        category: 'FACILITIES GIS',
        title: 'Seat-Level Digital Twins: Scaling ArcGIS Indoors and Public Safety for Multi-Tiered Arenas',
        excerpt:
          'geoConvergence helped scale ArcGIS Indoors and Public Safety for Multi-Tiered Arenas to a new level of precision and operational insight.',
        date: 'April 10, 2025',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75',
        tag: 'Facilities GIS',
      },
      {
        id: 2,
        category: 'ESRI PARTNERSHIP',
        title: 'geoConvergence Recognized as an Esri Cornerstone Partner for 20 Years of Commitment to Esri and ArcGIS Software',
        excerpt:
          'This recognition affirms our two-decade commitment to delivering elite GIS solutions and advancing Esri\'s mission across public and private sectors.',
        date: 'February 26, 2025',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75',
        tag: 'Partnership',
      },
      {
        id: 3,
        category: 'INDOOR MAPPING',
        title: 'Helping Baltimore County Public Schools (BCPS) Build a Sustainable Indoor GIS Program',
        excerpt:
          'Helping Baltimore County make every school safer through industry-leading indoor mapping and GIS technology solutions.',
        date: 'January 14, 2025',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75',
        tag: 'Indoor Mapping',
      },
    ],
    popularTags: ['GIS', 'Arc', 'Indoor Mapping', 'tech', 'Scan2Twin', 'Digital Twin', 'ArcGIS'],
    recentPosts: [
      {
        id: 1,
        title: 'Seat-Level Digital Twins…',
        date: 'April 10, 2025',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&q=75',
      },
      {
        id: 2,
        title: 'geoConvergence Recognized…',
        date: 'February 26, 2025',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&q=75',
      },
      {
        id: 3,
        title: 'Helping Baltimore County Public…',
        date: 'January 14, 2025',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=75',
      },
    ],
  },
  blogDetailsPage: {
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=700&q=80',
        alt: 'Arena aerial view',
      },
      {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80',
        alt: 'Stadium seating',
      },
      {
        src: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=700&q=80',
        alt: 'Indoor arena floor',
      },
      {
        src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&q=80',
        alt: 'Crowd in venue',
      },
    ],
    inlineImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=80',
    intro: 'geoConvergence has spent the last two years working inside some of the largest and most complex entertainment venues in the United States. The challenge: translate a living, breathing arena into a precision digital twin that supports both daily operations and emergency response — at the individual seat level.',
    sections: [
      {
        heading: 'From City Blocks to the Arena Floor',
        paras: [
          'When geoConvergence first began working with large-scale sports venues, the challenge was clear: arenas are among the most complex, high-traffic indoor environments in the world. With tens of thousands of fans, layered seating tiers, multiple concourse levels, and operational staff spanning dozens of departments, a traditional floor plan simply could not capture the intelligence needed for modern facility management.',
          'Our team deployed a full LiDAR scanning campaign across the arena, capturing every seat, aisle, exit, and utility corridor with millimeter-level precision. The raw point cloud data was then processed into a fully navigable ArcGIS Indoors model — seat-level granularity included.',
        ],
      },
      {
        heading: 'The Anatomy of an Arena',
        paras: [
          'An arena is not one building — it is a stack of interconnected environments. Suites, clubs, tunnels, ADA corridors, back-of-house service routes, and media zones all co-exist within the same structure, each with its own operational logic.',
          'By building a federated indoor GIS model, geoConvergence gave facility managers a single pane of glass to view and query every layer of the building. Want to know which seats have obstructed sightlines? Which exit routes are nearest to section 112? Which concession stands are within 200 meters of any given entrance? The system answers all of these instantly.',
        ],
      },
      {
        heading: 'Why Spatial Safety Matters',
        paras: [
          'Public safety in a venue context is not just about security checkpoints. It is about understanding crowd flow, evacuation routing, emergency response access, and real-time situational awareness during events. geoConvergence integrated Esri\'s public safety workflows directly into the digital twin.',
          'First responders now have access to pre-positioned indoor maps, updated in real-time with event footprint data. Dispatch logic is informed by spatial proximity — not building number alone. For arenas hosting 20,000+ attendees, this precision routinely makes the difference between a controlled situation and a critical one.',
        ],
      },
      {
        heading: 'Engineering the Space',
        paras: [
          'The ArcGIS Indoors model was not a one-time deliverable. geoConvergence established a living digital twin — a GIS dataset that evolves with the building. When new signage is installed, a section is reconfigured, or a new sponsor activation changes the floorplan, the model is updated to reflect the real world.',
          'This "evergreen" approach to indoor mapping ensures that the operational intelligence embedded in the system remains accurate and actionable year after year. The arena\'s facilities team was trained to make minor updates independently, while geoConvergence provides quarterly audit and update cycles for any structural changes.',
        ],
      },
      {
        heading: 'Do it For Public Safety',
        paras: [
          'The most important outcome of this engagement was not a map — it was peace of mind. Knowing that every seat, every exit, every service corridor is precisely documented and queryable in real time changes how a venue thinks about safety, operations, and guest experience.',
          'The seat-level digital twin built by geoConvergence is now the operational backbone of this arena\'s facility intelligence program. It feeds into their work order management system, their event operations dashboard, and their emergency management planning.',
          'For arenas considering a similar program, geoConvergence recommends starting with a phased approach: capture the primary concourse levels first, validate with operations staff, then expand to suites, tunnels, and back-of-house. The ROI compounds quickly — and the safety benefits begin on day one.',
        ],
      },
    ],
  },
  careerDetailsPage: {
    tabData: {
      overview: `geoConvergence is an award-winning, SBA 8(a) and HUBZone-certified GIS consulting firm specializing in implementing, integrating, and extending core Esri technology. We provide best-in-class geospatial and information technology solutions to commercial and government customers. As we transition into a phase of rapid scaling, we are looking for a strategic partner to support our leadership in driving growth and operational excellence.`,
      summary: `We are seeking a highly motivated Supervisor to join our growing team. The ideal candidate will have experience in GIS technology, project management, and team leadership. This full-time position offers a competitive package with opportunities for rapid career growth as the company scales.`,
      responsibilities: `Lead and manage cross-functional teams across geospatial projects. Oversee project delivery timelines and quality assurance. Coordinate with government and commercial clients to ensure alignment on deliverables. Mentor junior staff and contribute to knowledge-sharing initiatives. Report directly to senior leadership on project milestones.`,
      qualifications: `Bachelor's or Master's degree in GIS, Geography, Computer Science, or a related field. 5+ years of experience in geospatial or IT consulting. Proficiency in Esri ArcGIS platform. Strong communication and stakeholder management skills. SBA 8(a) or HUBZone experience is a plus.`,
    },
    tabs: [
      { key: 'overview', label: 'Company Overview' },
      { key: 'summary', label: 'Job Summary' },
      { key: 'responsibilities', label: 'Position Responsibilities' },
      { key: 'qualifications', label: 'Qualifications' },
    ],
    stats: [
      { label: 'Post', value: 'Supervisor' },
      { label: 'Time', value: 'Full Time' },
      { label: 'Salary', value: 'Negotiable' },
      { label: 'No. of', value: 'Vacancy 8' },
    ],
    applyItems: [
      'Nunc expedita montes minima.',
      'Animi atque ornare iaculis.',
      'Sociosqu scelerisque adipisci.',
      'Purus eveniet incidi dunt.',
      'Animi atque ornare iaculis.',
    ],
  }
};
