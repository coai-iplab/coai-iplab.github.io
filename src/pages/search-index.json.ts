import { getCollection } from 'astro:content';
import { withBase } from '../lib/url';

export async function GET() {
  const searchIndex: any[] = [];

  // 1. Team Members
  const teamMembers = await getCollection('team');
  teamMembers.forEach((member) => {
    searchIndex.push({
      title: member.data.name,
      subtitle: `${member.data.role} • ${member.data.affiliation}`,
      type: 'People',
      url: withBase(`/team/${member.id}`),
      content: `${member.data.name} ${member.data.role} ${member.data.affiliation} ${member.body || ''} ${member.data.notes || ''}`.trim(),
    });
  });

  // 2. Publications
  const publications = await getCollection('publications');
  publications.filter(pub => pub.data.active !== false).forEach((pub) => {
    searchIndex.push({
      title: pub.data.title,
      subtitle: `${pub.data.authors} (${pub.data.year}) — ${pub.data.venue}`,
      type: 'Publications',
      url: withBase(`/research/${pub.id}`),
      content: `${pub.data.title} ${pub.data.authors} ${pub.data.venue} ${pub.data.year} ${pub.body || ''} ${pub.data.teaser || ''} ${pub.data.award || ''}`.trim(),
    });
  });

  // 3. Funded Projects
  const fundedProjects = await getCollection('fundedProjects');
  fundedProjects.forEach((project) => {
    searchIndex.push({
      title: project.data.title,
      subtitle: `${project.data.role} • ${project.data.funding} (${project.data.period})`,
      type: 'Projects',
      url: withBase('/projects'),
      content: `${project.data.title} ${project.data.role} ${project.data.funding} ${project.data.period} ${project.data.description || ''} ${project.data.partners || ''}`.trim(),
    });
  });

  // 4. News
  const news = await getCollection('news');
  news.forEach((n) => {
    searchIndex.push({
      title: n.data.title,
      subtitle: `${n.data.type} • ${n.data.date}`,
      type: 'News',
      url: withBase('/'),
      content: `${n.data.title} ${n.data.type} ${n.data.date} ${n.body || ''}`.trim(),
    });
  });

  // 5. Engagements / Talks
  const engagements = await getCollection('engagements');
  engagements.forEach((e) => {
    searchIndex.push({
      title: e.data.title,
      subtitle: `${e.data.type} • ${e.data.speaker} • ${e.data.venue} (${e.data.date})`,
      type: 'Public Engagement',
      url: withBase('/engagement'),
      content: `${e.data.title} ${e.data.type} ${e.data.speaker} ${e.data.venue} ${e.data.date} ${e.body || ''}`.trim(),
    });
  });

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
