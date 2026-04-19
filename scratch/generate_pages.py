import os

base_dir = r"d:\geoConvergence_Prem"
frontend_data_dir = os.path.join(base_dir, r"frontend\src\lib\data")
sanity_schemas_dir = os.path.join(base_dir, r"sanity-geo-convergence\schemas")
frontend_pages_dir = os.path.join(base_dir, r"frontend\src\pages")

pages = [
    {"name": "lidarScanningPage", "component": "LidarScanningPage", "route": "/lidar-scanning", "title": "LiDAR Scanning"},
    {"name": "threeDModelingPage", "component": "ThreeDModelingPage", "route": "/3d-modeling", "title": "3D Modeling & Point-to-BIM"},
    {"name": "arcgisIndoorsPage", "component": "ArcGisIndoorsPage", "route": "/arcgis-indoors", "title": "ArcGIS Indoors"}
]

IMAGE_REF = "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png"

for p in pages:
    # DATA FILE
    data_content = f"""export const {p['name']}Data = {{
  hero: {{
    title: "{p['title']}",
    subtitle: "Advanced solutions in {p['title']} to redefine physical and digital transformations.",
    backgroundImage: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
  }},
  coreValues: {{
    sectionTitle: "Our Core Values",
    cards: [
      {{ title: "Innovation", description: "Pushing boundaries", iconColor: "blue" }},
      {{ title: "Accuracy", description: "Precision in every detail", iconColor: "blue" }},
      {{ title: "Integrity", description: "Honest and transparent", iconColor: "blue" }}
    ]
  }},
  servicesDescription: {{
    title: "{p['title']} Services Overview",
    description: "Our {p['title']} services provide end-to-end capabilities tailored to meet complex operational needs, bridging the gap from scan data to fully operational models with efficiency and precision."
  }},
  solutions: [
    {{
      title: "Phase 1: Discovery & Capture",
      description: "The fundamental first step ensuring rigorous data capture metrics and alignment with overarching operational goals.",
      buttonText: "Learn More",
      image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
    }},
    {{
      title: "Phase 2: Processing & Modeling",
      description: "Advanced algorithmic conversion mapping captured coordinates into structured architectural, engineering, or structural environments ready for enterprise integrations.",
      buttonText: "Learn More",
      image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
    }},
    {{
      title: "Phase 3: Deployment",
      description: "Seamless delivery of actionable insights enabling key stakeholders to achieve complete operational intelligence and navigational readiness.",
      buttonText: "Learn More",
      image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
    }}
  ],
  stats: {{
    sectionTitle: "Key Features",
    sectionSubtitle: "Deliver precise intelligence with real-time data integrations and analytical superiority.",
    cards: [
      {{ number: "400+", label: "Projects Completed" }},
      {{ number: "10+", label: "Years of Experience" }},
      {{ number: "50+", label: "Happy Clients" }},
      {{ number: "99%", label: "Success Rate" }}
    ]
  }},
  finalCta: {{
    title: "Ready to define your digital dimension?",
    subtitle: "Join hundreds of organizations using geoConvergence to unlock the full potential of their physical assets.",
    button1: {{ text: "Schedule a Consultation", link: "#" }},
    button2: {{ text: "View Case Studies", link: "#" }},
    backgroundImage: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
  }}
}};
"""
    with open(os.path.join(frontend_data_dir, f"{p['name']}Data.js"), 'w') as f:
        f.write(data_content)

    # SCHEMA FILE
    schema_content = f"""import {{ defineType, defineField }} from 'sanity'

export default defineType({{
  name: '{p['name']}',
  title: '{p['title']} Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({{
      name: 'hero', title: 'Hero', type: 'object',
      fields: [
        defineField({{ name: 'title', type: 'string' }}),
        defineField({{ name: 'subtitle', type: 'text' }}),
        defineField({{ name: 'backgroundImage', type: 'image', options: {{ hotspot: true }} }})
      ]
    }}),
    defineField({{
      name: 'coreValues', title: 'Core Values', type: 'object',
      fields: [
        defineField({{ name: 'sectionTitle', type: 'string' }}),
        defineField({{
          name: 'cards', type: 'array', of: [
            {{ type: 'object', fields: [ defineField({{ name: 'title', type: 'string' }}), defineField({{ name: 'description', type: 'text' }}), defineField({{ name: 'iconColor', type: 'string' }}) ] }}
          ]
        }})
      ]
    }}),
    defineField({{
      name: 'servicesDescription', title: 'Services Description', type: 'object',
      fields: [
        defineField({{ name: 'title', type: 'string' }}),
        defineField({{ name: 'description', type: 'text' }})
      ]
    }}),
    defineField({{
      name: 'solutions', title: 'Solution Blocks', type: 'array',
      of: [
        {{ type: 'object', fields: [
          defineField({{ name: 'title', type: 'string' }}),
          defineField({{ name: 'description', type: 'text' }}),
          defineField({{ name: 'buttonText', type: 'string' }}),
          defineField({{ name: 'image', type: 'image', options: {{ hotspot: true }} }})
        ] }}
      ]
    }}),
    defineField({{
      name: 'stats', title: 'Stats', type: 'object',
      fields: [
        defineField({{ name: 'sectionTitle', type: 'string' }}),
        defineField({{ name: 'sectionSubtitle', type: 'text' }}),
        defineField({{
          name: 'cards', type: 'array', of: [
            {{ type: 'object', fields: [ defineField({{ name: 'number', type: 'string' }}), defineField({{ name: 'label', type: 'string' }}) ] }}
          ]
        }})
      ]
    }}),
    defineField({{
      name: 'finalCta', title: 'Final CTA', type: 'object',
      fields: [
        defineField({{ name: 'title', type: 'string' }}),
        defineField({{ name: 'subtitle', type: 'text' }}),
        defineField({{ name: 'backgroundImage', type: 'image', options: {{ hotspot: true }} }}),
        defineField({{ name: 'button1', type: 'object', fields: [ {{ name: 'text', type: 'string' }}, {{ name: 'link', type: 'string' }} ] }}),
        defineField({{ name: 'button2', type: 'object', fields: [ {{ name: 'text', type: 'string' }}, {{ name: 'link', type: 'string' }} ] }})
      ]
    }})
  ]
}})
"""
    with open(os.path.join(sanity_schemas_dir, f"{p['name']}.js"), 'w') as f:
        f.write(schema_content)

    # PAGE COMPONENT
    jsx_content = f"""import React from 'react';
import {{ useThemeStore }} from '../store/useThemeStore';
import {{ useQuery }} from '@tanstack/react-query';
import {{ fetch{p['component']} }} from '../lib/api';
import {{ {p['name']}Data }} from '../lib/data/{p['name']}Data';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Services_Description from '../components/Services_Description';
import SolutionBlock from '../components/SolutionBlock';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function {p['component']}() {{
  const {{ theme, toggleTheme }} = useThemeStore();
  
  const {{ data }} = useQuery({{
    queryKey: ['{p['name']}'],
    queryFn: fetch{p['component']},
  }});

  const pageData = data || {p['name']}Data;
  const isDark = theme === 'dark';

  const parsedStatsData = pageData.stats?.cards?.map(card => {{
    const valueStr = card.number.replace(/[^0-9]/g, '');
    const value = parseInt(valueStr) || 0;
    const suffix = card.number.replace(/[0-9]/g, '');
    return {{
      value,
      suffix,
      label: card.label,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    }};
  }});

  return (
    <div className={{isDark ? 'dark' : ''}} style={{{{ background: 'var(--bg)', color: 'var(--text)' }}}}>
      <Navbar darkMode={{isDark}} toggleDarkMode={{toggleTheme}} />

      <main>
        <Hero darkMode={{isDark}} hero={{pageData.hero}} title={{pageData.hero?.title || "{p['title']}"}} />

        {{pageData.coreValues && (
          <CoreValues 
            title={{pageData.coreValues.sectionTitle}} 
            cards={{pageData.coreValues.cards}} 
          />
        )}}

        <Services_Description pageData={{pageData}} theme={{theme}} />

        <section className={{`bg-[var(--bg)]`}}>
            {{pageData.solutions?.map((solution, index) => (
                <div key={{index}} className={{index === 1 ? 'bg-[var(--slate-bg)]' : ''}}>
                  <SolutionBlock
                      title={{solution.title}}
                      description={{solution.description}}
                      button={{solution.buttonText ? {{ text: solution.buttonText, link: "#" }} : null}}
                      image={{solution.image}}
                      imagePosition={{index % 2 === 0 ? "right" : "left"}}
                      darkMode={{isDark}}
                  />
                </div>
            )))}}
        </section>

        {{pageData.stats && (
          <div className="py-12 bg-[var(--bg)]">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-['Titillium_Web'] text-[var(--text)] mb-4">
                {{pageData.stats.sectionTitle}}
              </h2>
              <p className="text-xl text-[var(--text)] text-opacity-80 max-w-3xl">
                {{pageData.stats.sectionSubtitle}}
              </p>
            </div>
            <Stats 
              darkMode={{isDark}} 
              statsData={{parsedStatsData}}
            />
          </div>
        )}}

        <CTA darkMode={{isDark}} CtaData={{pageData.finalCta}} />
      </main>

      <Footer darkMode={{isDark}} />
    </div>
  );
}}
"""
    with open(os.path.join(frontend_pages_dir, f"{p['component']}.jsx"), 'w') as f:
        f.write(jsx_content)

print("Pages generation complete.")
