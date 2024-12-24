import parse from 'html-react-parser';

const markdownToHtml = (text: string) => {
  // Negrito: **text** -> <strong>text</strong>
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Itálico: *text* -> <em>text</em>
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Título: # text -> <h1>text</h1>
  text = text.replace(/^#\s(.*)$/gm, '<h1>$1</h1>');

  // Lista não ordenada: - item -> <ul><li>item</li></ul>
  text = text.replace(/^- (.*)$/gm, '<ul><li>$1</li></ul>');

  // Lista ordenada: 1. item -> <ol><li>item</li></ol>
  text = text.replace(/^\d+\. (.*)$/gm, '<ol><li>$1</li></ol>');

  // Link: [text](url) -> <a href="url">text</a>
  text = text.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2">$1</a>',
  );

  return parse(text);
};

export default markdownToHtml;
