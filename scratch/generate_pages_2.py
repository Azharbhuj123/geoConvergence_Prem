import os

base_dir = r"d:\geoConvergence_Prem"
frontend_data_dir = os.path.join(base_dir, r"frontend\src\lib\data")
sanity_schemas_dir = os.path.join(base_dir, r"sanity-geo-convergence\schemas")
frontend_pages_dir = os.path.join(base_dir, r"frontend\src\pages")

pages = [
    {"name": "digitalTwinsPage", "component": "DigitalTwinsPage", "route": "/digital-twins", "title": "Digital Twins"},
    {"name": "reservAssistPage", "component": "ReservAssistPage", "route": "/reserv-assist", "title": "ReservAssist"},
    {"name": "geoPrinterPage", "component": "GeoPrinterPage", "route": "/geo-printer", "title": "Geo Printer"},
    {"name": "scenarioPlannerPage", "component": "ScenarioPlannerPage", "route": "/scenario-planner", "title": "Scenario Planner"},
    {"name": "roomReservPage", "component": "RoomReservPage", "route": "/room-reserv", "title": "RoomReserv"}
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
  firstSolution: {{
    title: "Discover {p['title']}",
    description: "Transform your workflows and unlock unprecedented operational efficiency with {p['title']}. We bridge the gap between physical reality and digital excellence.",
    buttonText: "Learn More",
    image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
  }},
  coreValues: {{
    sectionTitle: "Our Core Values",
    cards: [
      {{ title: "Innovation", description: "Pushing boundaries", iconColor: "blue" }},
      {{ title: "Accuracy", description: "Precision in every detail", iconColor: "blue" }},
      {{ title: "Integrity", description: "Honest and transparent", iconColor: "blue" }},
      {{ title: "Excellence", description: "Delivering the best", iconColor: "blue" }}
    ]
  }},
  howItWorks: {{
    sectionTitle: "How It Works",
    sectionSubtitle: "A seamless process designed to deploy {p['title']} effortlessly.",
    cards: [
      {{
        title: "Step 1: Onboard",
        description: "Initial setup and environmental assessment.",
        image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
      }},
      {{
        title: "Step 2: Integrate",
        description: "Connecting our solutions to your existing pipelines.",
        image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
      }},
      {{
        title: "Step 3: Elevate",
        description: "Deploying intelligent insights directly to key stakeholders.",
        image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
      }}
    ]
  }},
  secondSolution: {{
    title: "Why choose {p['title']}?",
    description: "Built for speed, scale, and uncompromising accuracy. Ensure your teams are fully equipped to handle whatever comes next.",
    buttonText: "See Capabilities",
    image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
  }},
  useCases: {{
    sectionTitle: "Use Cases",
    sectionSubtitle: "Empowering a diverse range of operational requirements.",
    cards: [
      {{
        title: "Commercial Real Estate",
        description: "Streamline multi-tenant deployments.",
        image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
      }},
      {{
        title: "Education Campuses",
        description: "Simplify expansive campus oversight.",
        image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
      }},
      {{
        title: "Healthcare Facilities",
        description: "Robust tracking for mission critical zones.",
        image: {{ _type: "image", asset: {{ _ref: "{IMAGE_REF}" }} }}
      }}
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
      name: 'firstSolution', title: 'First Solution Block', type: 'object',
      fields: [
        defineField({{ name: 'title', type: 'string' }}),
        defineField({{ name: 'description', type: 'text' }}),
        defineField({{ name: 'buttonText', type: 'string' }}),
        defineField({{ name: 'image', type: 'image', options: {{ hotspot: true }} }})
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
      name: 'howItWorks', title: 'How It Works (Services)', type: 'object',
      fields: [
        defineField({{ name: 'sectionTitle', type: 'string' }}),
        defineField({{ name: 'sectionSubtitle', type: 'text' }}),
        defineField({{
          name: 'cards', type: 'array', of: [
            {{ type: 'object', fields: [ defineField({{ name: 'title', type: 'string' }}), defineField({{ name: 'description', type: 'text' }}), defineField({{ name: 'image', type: 'image', options: {{ hotspot: true }} }}) ] }}
          ]
        }})
      ]
    }}),
    defineField({{
      name: 'secondSolution', title: 'Second Solution Block', type: 'object',
      fields: [
        defineField({{ name: 'title', type: 'string' }}),
        defineField({{ name: 'description', type: 'text' }}),
        defineField({{ name: 'buttonText', type: 'string' }}),
        defineField({{ name: 'image', type: 'image', options: {{ hotspot: true }} }})
      ]
    }}),
    defineField({{
      name: 'useCases', title: 'Use Cases (Services)', type: 'object',
      fields: [
        defineField({{ name: 'sectionTitle', type: 'string' }}),
        defineField({{ name: 'sectionSubtitle', type: 'text' }}),
        defineField({{
          name: 'cards', type: 'array', of: [
             {{ type: 'object', fields: [ defineField({{ name: 'title', type: 'string' }}), defineField({{ name: 'description', type: 'text' }}), defineField({{ name: 'image', type: 'image', options: {{ hotspot: true }} }}) ] }}
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
import SolutionBlock from '../components/SolutionBlock';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
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

  return (
    <div className={{isDark ? 'dark' : ''}} style={{{{ background: 'var(--bg)', color: 'var(--text)' }}}}>
      <Navbar darkMode={{isDark}} toggleDarkMode={{toggleTheme}} />

      <main>
        <Hero darkMode={{isDark}} hero={{pageData.hero}} title={{pageData.hero?.title || "{p['title']}"}} />

        {{pageData.firstSolution && (
          <section className="bg-[var(--bg)]">
            <SolutionBlock
              title={{pageData.firstSolution.title}}
              description={{pageData.firstSolution.description}}
              button={{pageData.firstSolution.buttonText ? {{ text: pageData.firstSolution.buttonText, link: "#" }} : null}}
              image={{pageData.firstSolution.image}}
              imagePosition="right"
              darkMode={{isDark}}
            />
          </section>
        )}}

        {{pageData.coreValues && (
          <CoreValues 
            title={{pageData.coreValues.sectionTitle}} 
            cards={{pageData.coreValues.cards}} 
          />
        )}}

        {{pageData.howItWorks && (
          <Services 
            darkMode={{isDark}} 
            services={{pageData.howItWorks}} 
            variant="blue" 
          />
        )}}

        {{pageData.secondSolution && (
          <section className="bg-[var(--slate-bg)]">
             <SolutionBlock
              title={{pageData.secondSolution.title}}
              description={{pageData.secondSolution.description}}
              button={{pageData.secondSolution.buttonText ? {{ text: pageData.secondSolution.buttonText, link: "#" }} : null}}
              image={{pageData.secondSolution.image}}
              imagePosition="left"
              darkMode={{isDark}}
            />
          </section>
        )}}

        {{pageData.useCases && (
          <Services 
            darkMode={{isDark}} 
            services={{pageData.useCases}} 
            variant="default" 
          />
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
