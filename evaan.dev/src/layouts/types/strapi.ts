interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Album {
  name: string;
  artist: string;
  cover: Image;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface AlbumsResponse {
  data: Album[];
  meta: {
    pagination: Pagination;
  };
}

interface Language {
  id: number;
  name: string;
  colour?: string;
}

interface Link {
  id: number;
  name: string;
  url: string;
}

export interface Project {
  id: number;
  documentId: string;
  name: string;
  description: string;
  shown: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  languages: Language[];
  links: Link[];
}

export interface ProjectsResponse {
  data: Project[];
  meta: {
    pagination: Pagination;
  };
}