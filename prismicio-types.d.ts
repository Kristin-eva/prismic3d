// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ProjectsSlice
  | WorkSlice
  | TechListSlice
  | BiographySlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
  /**
   * Link field in *Settings → Nav Item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Label field in *Settings → Nav Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Nav Item field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

  /**
   * CTA Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * CTA Label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * GitHub Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.github_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * LinkedIn Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.linkedin_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  > /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *Biography → Default → Primary*
 */
export interface BiographySliceDefaultPrimary {
  /**
   * Heading field in *Biography → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *Biography → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Button Text field in *Biography → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Biography → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Avatar field in *Biography → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.default.primary.avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Default variation for Biography Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BiographySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Biography*
 */
type BiographySliceVariation = BiographySliceDefault;

/**
 * Biography Shared Slice
 *
 * - **API ID**: `biography`
 * - **Description**: Biography
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySlice = prismic.SharedSlice<
  "biography",
  BiographySliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * First Name field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.first_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.last_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Tag Line field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.tag_line
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_line: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Projects → Default → Primary*
 */
export interface ProjectsSliceDefaultPrimary {
  /**
   * Title field in *Projects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Projects → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Description field in *Projects → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Project image field in *Projects → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.default.primary.project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;

  /**
   * Button Link field in *Projects → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Button Text field in *Projects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Projects*
 */
type ProjectsSliceVariation = ProjectsSliceDefault;

/**
 * Projects Shared Slice
 *
 * - **API ID**: `projects`
 * - **Description**: Projects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSlice = prismic.SharedSlice<
  "projects",
  ProjectsSliceVariation
>;

/**
 * Item in *TechList → Default → Primary → Tech*
 */
export interface TechListSliceDefaultPrimaryTechNameItem {
  /**
   * Tech Name field in *TechList → Default → Primary → Tech*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech_name[].tech_name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tech_name: prismic.RichTextField;

  /**
   * Tech Color field in *TechList → Default → Primary → Tech*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech_name[].tech_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  tech_color: prismic.ColorField;

  /**
   * Tech Image field in *TechList → Default → Primary → Tech*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech_name[].tech_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  tech_image: prismic.ImageField<never>;
}

/**
 * Primary content in *TechList → Default → Primary*
 */
export interface TechListSliceDefaultPrimary {
  /**
   * Heading field in *TechList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tech field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech_name[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tech_name: prismic.GroupField<
    Simplify<TechListSliceDefaultPrimaryTechNameItem>
  >;
}

/**
 * Default variation for TechList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TechListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TechList*
 */
type TechListSliceVariation = TechListSliceDefault;

/**
 * TechList Shared Slice
 *
 * - **API ID**: `tech_list`
 * - **Description**: TechList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSlice = prismic.SharedSlice<
  "tech_list",
  TechListSliceVariation
>;

/**
 * Primary content in *Work → Work → Primary*
 */
export interface WorkSliceDefaultPrimary {
  /**
   * Title field in *Work → Work → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.work_and_education_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  work_and_education_title: prismic.KeyTextField;

  /**
   * Subtitle field in *Work → Work → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Description field in *Work → Work → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.work_and_education_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  work_and_education_text: prismic.RichTextField;

  /**
   * Image field in *Work → Work → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.mynd
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mynd: prismic.ImageField<never>;

  /**
   * link title field in *Work → Work → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.link_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_title: prismic.KeyTextField;

  /**
   * work link field in *Work → Work → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.work_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  work_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Work variation for Work Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Work*
 */
type WorkSliceVariation = WorkSliceDefault;

/**
 * Work Shared Slice
 *
 * - **API ID**: `work`
 * - **Description**: Work
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSlice = prismic.SharedSlice<"work", WorkSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavItemItem,
      AllDocumentTypes,
      BiographySlice,
      BiographySliceDefaultPrimary,
      BiographySliceVariation,
      BiographySliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProjectsSlice,
      ProjectsSliceDefaultPrimary,
      ProjectsSliceVariation,
      ProjectsSliceDefault,
      TechListSlice,
      TechListSliceDefaultPrimaryTechNameItem,
      TechListSliceDefaultPrimary,
      TechListSliceVariation,
      TechListSliceDefault,
      WorkSlice,
      WorkSliceDefaultPrimary,
      WorkSliceVariation,
      WorkSliceDefault,
    };
  }
}
