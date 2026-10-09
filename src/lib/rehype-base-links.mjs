import { visit } from 'unist-util-visit';

const ATTRS_BY_TAG = {
  a: 'href',
  img: 'src',
};

export default function rehypeBaseLinks(base) {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  return (tree) => {
    visit(tree, 'element', (node) => {
      const attr = ATTRS_BY_TAG[node.tagName];
      if (!attr) return;
      const value = node.properties?.[attr];
      if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return;
      node.properties[attr] = `${normalizedBase}${value}`;
    });
  };
}
