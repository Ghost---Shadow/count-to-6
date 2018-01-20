function html(format, user, text) {
  let sanitizedText = text;

  const replaceables = [
    { before: /&/g, after: '&amp;' },
    { before: /'/g, after: '&apos;' },
    { before: /"/g, after: '&quot;' },
    { before: /</g, after: '&lt;' },
    { before: />/g, after: '&gt;' },
  ];

  replaceables.forEach((replaceable) => {
    sanitizedText = sanitizedText.replace(replaceable.before, replaceable.after);
  });
  return format[0] + user + format[1] + sanitizedText + format[2];
}

module.exports = html;
// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
