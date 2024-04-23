import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type ContentChunk } from './contentChunk';
import { type CourseCategory } from '../taxonomies/courseCategory';
import { type CourseType } from '../taxonomies/courseType';
import { type EnrollmentStatus } from '../taxonomies/enrollmentStatus';
import { type OpenGraphMetadata } from '../content-type-snippets/openGraphMetadata';
import { type SEOMetadata } from '../content-type-snippets/SEOMetadata';

/**
 * Generated by '@kontent-ai/model-generator@6.5.1'
 *
 * Course
 * Id: f688aa85-762c-46fa-93d4-14251a9f9efb
 * Codename: course
 */
export type Course = IContentItem<{
    /**
     * Body (rich_text)
     * Required: false
     * Id: 1263c4aa-fe18-4c5f-bb19-95325bb0d285
     * Codename: body
     */
    body: Elements.RichTextElement;

    /**
     * Course category (taxonomy)
     * Required: false
     * Id: ae3baac8-25fe-45c6-82b0-d854b1c3cacf
     * Codename: course_category
     */
    courseCategory: Elements.TaxonomyElement<CourseCategory>;

    /**
     * Course type (taxonomy)
     * Required: false
     * Id: 98970d5c-f679-44a2-a7b4-942cdd09f99b
     * Codename: course_type
     */
    courseType: Elements.TaxonomyElement<CourseType>;

    /**
     * Description (text)
     * Required: false
     * Id: 33eae92a-5ea6-4ab4-ab6c-ceba4748d71e
     * Codename: description
     */
    description: Elements.TextElement;

    /**
     * Duration in years (text)
     * Required: false
     * Id: aefc5e65-4880-46d7-8670-4140e9ba2d1c
     * Codename: duration_in_years
     */
    durationInYears: Elements.TextElement;

    /**
     * Enrollment Status (taxonomy)
     * Required: false
     * Id: c7538aa2-cb91-42a2-b46a-5b7b5b3d851b
     * Codename: enrollment_status
     */
    enrollmentStatus: Elements.TaxonomyElement<EnrollmentStatus>;

    /**
     * Fee in $ (text)
     * Required: false
     * Id: 481f1a9f-1228-4ebf-aba5-424269b4f069
     * Codename: fee_in__
     */
    feeIn: Elements.TextElement;

    /**
     * Hero image (asset)
     * Required: false
     * Id: 8781208f-d75d-4b31-881b-6d0c17e36cbf
     * Codename: hero_image
     */
    heroImage: Elements.AssetsElement;

    /**
     * Hide (multiple_choice)
     * Required: false
     * Id: 647812a7-eab1-47bc-a7dd-31133e19d0f0
     * Codename: hide
     */
    hide: Elements.MultipleChoiceElement;

    /**
     * Next start date (date_time)
     * Required: false
     * Id: 12a06da0-fc66-4938-ba6d-7f451fbdd13a
     * Codename: next_start_date
     */
    nextStartDate: Elements.DateTimeElement;

    /**
     * Overview (rich_text)
     * Required: false
     * Id: 27b224b5-ce97-456f-9da6-8556e4c2fd88
     * Codename: overview
     */
    overview: Elements.RichTextElement;

    /**
     * Title (text)
     * Required: false
     * Id: 529c72d2-92a1-4aba-bb27-19f3d0b71bb5
     * Codename: title
     */
    title: Elements.TextElement;

    /**
     * Slug (url_slug)
     * Required: false
     * Id: 8f627d96-9b8d-4fe9-b437-38e4b15ccc8b
     * Codename: url
     */
    url: Elements.UrlSlugElement;

    /**
     * Why us (modular_content)
     * Required: false
     * Id: ee5dcb35-32ab-455b-b719-8f4ff98caeb3
     * Codename: why_us
     */
    whyUs: Elements.LinkedItemsElement<ContentChunk>;
}> &
    OpenGraphMetadata &
    SEOMetadata;
