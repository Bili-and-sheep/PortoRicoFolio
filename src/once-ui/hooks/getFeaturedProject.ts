// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
//
// const projectsDirectory = path.join(process.cwd(), 'app/work/projects');
//
// export function getFeaturedProject() {
//     const filenames = fs.readdirSync(projectsDirectory);
//     for (const filename of filenames) {
//         const filePath = path.join(projectsDirectory, filename);
//         const fileContent = fs.readFileSync(filePath, 'utf-8');
//         const { data } = matter(fileContent);
//
//         if (data.featured === true) {
//             return {
//                 slug: filename.replace(/\.mdx$/, ''),
//                 ...data,
//             };
//         }
//     }
//
//     return null;
// }
