
import mongoose, { Document, Model } from 'mongoose';

interface ISection {
  sectionTitle: string;
  sectionContent: string;
  sectionImage?: string; // Optional
}

interface IPost extends Document {
  title: string;
  datePublished: Date;
  postImage: string;
  sections: ISection[];
}

const postSchema = new mongoose.Schema<IPost>({
  title: String,
  datePublished: Date,
  postImage: String,
  sections: [
    {
      sectionTitle: String,
      sectionContent: String,
      sectionImage: String, // Optional
    },
  ],
});

const Post: Model<IPost> = mongoose.model('Post', postSchema);

export default Post;
