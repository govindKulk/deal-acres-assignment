// populateDB.ts
import connectDB from './actions/db';
import Post from './models/postModel';

const main = async () => {
  connectDB();

  const samplePost = {
    title: 'Sample Post',
    datePublished: new Date(),
    postImage: '/sample-image.jpg',
    sections: [
      {
        sectionTitle: 'Section 1',
        sectionContent: 'Lorem ipsum...',
        sectionImage: '/section-image1.jpg',
      },
      {
        sectionTitle: 'Section 2',
        sectionContent: 'Lorem ipsum...',
        sectionImage: '/section-image2.jpg',
      },
    ],
  };

  try {
    await Post.create(samplePost);
    console.log('Sample post created');
  } catch (error) {
    console.error('Error creating sample post:', error);
  }

  process.exit();
};

main();
