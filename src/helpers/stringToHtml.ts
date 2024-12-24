import parse from 'html-react-parser';

const stringToHtml = (text: string) => {
  return parse(text);
};

export default stringToHtml;
