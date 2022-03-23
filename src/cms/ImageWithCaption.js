const ImageWithCaption = {
  id: 'image-with-caption',
  label: 'Image with caption',
  fields: [
    {
      name: 'image',
      label: 'Image',
      widget: 'image',
    },
    {
      name: 'caption',
      label: 'Caption',
      widget: 'string',
    },
  ],
  pattern: /^<figure>$\s*?<img src="(.*?)" alt="" \/><figcaption>(.*?)^<\/figcaption><\/figure>$/ms,
  fromBlock(match) {
    return {
      image: match[1],
      caption: match[2],
    };
  },
  toBlock: (props) => `
  <figure>
    <img src="${props.image}" alt="" />
    <figcaption>${props.caption}</figcaption>
  </figure>
  `,
  toPreview: (props, getAsset, fields) => {
    const imageField = fields?.find((f) => f.get('widget') === 'image');
    const src = getAsset(props.image, imageField);

    return (
      <figure>
        <img src={src} alt="" />
        <figcaption>{props.caption}</figcaption>
      </figure>
    );
  },
};

export default ImageWithCaption;
