// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { GetTemplatesData, GetTemplatesError, GetTemplatesResponse, GetTemplateData, GetTemplateError, GetTemplateResponse, ArchiveTemplateData, ArchiveTemplateError, ArchiveTemplateResponse, UpdateTemplateData, UpdateTemplateError, UpdateTemplateResponse, GetSubmissionsData, GetSubmissionsError, GetSubmissionsResponse, CreateSubmissionData, CreateSubmissionError, CreateSubmissionResponse, GetSubmissionData, GetSubmissionError, GetSubmissionResponse, ArchiveSubmissionData, ArchiveSubmissionError, ArchiveSubmissionResponse, CreateSubmissionsFromEmailsData, CreateSubmissionsFromEmailsError, CreateSubmissionsFromEmailsResponse, GetSubmitterData, GetSubmitterError, GetSubmitterResponse, UpdateSubmitterData, UpdateSubmitterError, UpdateSubmitterResponse, GetSubmittersData, GetSubmittersError, GetSubmittersResponse, AddDocumentToTemplateData, AddDocumentToTemplateError, AddDocumentToTemplateResponse, CloneTemplateData, CloneTemplateError, CloneTemplateResponse, CreateTemplateFromHtmlData, CreateTemplateFromHtmlError, CreateTemplateFromHtmlResponse, CreateTemplateFromDocxData, CreateTemplateFromDocxError, CreateTemplateFromDocxResponse, CreateTemplateFromPdfData, CreateTemplateFromPdfError, CreateTemplateFromPdfResponse, MergeTemplateData, MergeTemplateError, MergeTemplateResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * List all templates
 * The API endpoint provides the ability to retrieve a list of available document templates.
 */
export const getTemplates = <ThrowOnError extends boolean = false>(options?: Options<GetTemplatesData, ThrowOnError>) => { return (options?.client ?? client).get<GetTemplatesResponse, GetTemplatesError, ThrowOnError>({
    ...options,
    url: '/templates'
}); };

/**
 * Get a template
 * The API endpoint provides the functionality to retrieve information about a document template.
 */
export const getTemplate = <ThrowOnError extends boolean = false>(options: Options<GetTemplateData, ThrowOnError>) => { return (options?.client ?? client).get<GetTemplateResponse, GetTemplateError, ThrowOnError>({
    ...options,
    url: '/templates/{id}'
}); };

/**
 * Archive a template
 * The API endpoint allows you to archive a document template.
 */
export const archiveTemplate = <ThrowOnError extends boolean = false>(options: Options<ArchiveTemplateData, ThrowOnError>) => { return (options?.client ?? client).delete<ArchiveTemplateResponse, ArchiveTemplateError, ThrowOnError>({
    ...options,
    url: '/templates/{id}'
}); };

/**
 * Update a template
 * The API endpoint provides the functionality to move a document template to a different folder and update the name of the template.
 */
export const updateTemplate = <ThrowOnError extends boolean = false>(options: Options<UpdateTemplateData, ThrowOnError>) => { return (options?.client ?? client).put<UpdateTemplateResponse, UpdateTemplateError, ThrowOnError>({
    ...options,
    url: '/templates/{id}'
}); };

/**
 * List all submissions
 * The API endpoint provides the ability to retrieve a list of available submissions.
 */
export const getSubmissions = <ThrowOnError extends boolean = false>(options?: Options<GetSubmissionsData, ThrowOnError>) => { return (options?.client ?? client).get<GetSubmissionsResponse, GetSubmissionsError, ThrowOnError>({
    ...options,
    url: '/submissions'
}); };

/**
 * Create a submission
 * This API endpoint allows you to create signature requests (submissions) for a document template and send them to the specified submitters (signers).<br><b>Related Guides</b><br><a href="https://www.docuseal.co/guides/send-documents-for-signature-via-api" class="link">Send documents for signature via API</a><br><a href="https://www.docuseal.co/guides/pre-fill-pdf-document-form-fields-with-api" class="link">Pre-fill PDF document form fields with API</a>
 */
export const createSubmission = <ThrowOnError extends boolean = false>(options: Options<CreateSubmissionData, ThrowOnError>) => { return (options?.client ?? client).post<CreateSubmissionResponse, CreateSubmissionError, ThrowOnError>({
    ...options,
    url: '/submissions'
}); };

/**
 * Get a submission
 * The API endpoint provides the functionality to retrieve information about a submission.
 */
export const getSubmission = <ThrowOnError extends boolean = false>(options: Options<GetSubmissionData, ThrowOnError>) => { return (options?.client ?? client).get<GetSubmissionResponse, GetSubmissionError, ThrowOnError>({
    ...options,
    url: '/submissions/{id}'
}); };

/**
 * Archive a submission
 * The API endpoint allows you to archive a submission.
 */
export const archiveSubmission = <ThrowOnError extends boolean = false>(options: Options<ArchiveSubmissionData, ThrowOnError>) => { return (options?.client ?? client).delete<ArchiveSubmissionResponse, ArchiveSubmissionError, ThrowOnError>({
    ...options,
    url: '/submissions/{id}'
}); };

/**
 * Create submissions from emails
 * This API endpoint allows you to create submissions for a document template and send them to the specified email addresses. This is a simplified version of the POST /submissions API to be used with Zapier or other automation tools.
 */
export const createSubmissionsFromEmails = <ThrowOnError extends boolean = false>(options: Options<CreateSubmissionsFromEmailsData, ThrowOnError>) => { return (options?.client ?? client).post<CreateSubmissionsFromEmailsResponse, CreateSubmissionsFromEmailsError, ThrowOnError>({
    ...options,
    url: '/submissions/emails'
}); };

/**
 * Get a submitter
 * The API endpoint provides the functionality to retrieve information about a submitter.
 */
export const getSubmitter = <ThrowOnError extends boolean = false>(options: Options<GetSubmitterData, ThrowOnError>) => { return (options?.client ?? client).get<GetSubmitterResponse, GetSubmitterError, ThrowOnError>({
    ...options,
    url: '/submitters/{id}'
}); };

/**
 * Update a submitter
 * The API endpoint provides allows you to update submitter details, pre-fill or update field values and re-send emails.<br><b>Related Guides</b><br><a href="https://www.docuseal.co/guides/pre-fill-pdf-document-form-fields-with-api#automatically_sign_documents_via_api" class="link">Automatically sign documents via API</a>
 */
export const updateSubmitter = <ThrowOnError extends boolean = false>(options: Options<UpdateSubmitterData, ThrowOnError>) => { return (options?.client ?? client).put<UpdateSubmitterResponse, UpdateSubmitterError, ThrowOnError>({
    ...options,
    url: '/submitters/{id}'
}); };

/**
 * List all submitters
 * The API endpoint provides the ability to retrieve a list of submitters.
 */
export const getSubmitters = <ThrowOnError extends boolean = false>(options?: Options<GetSubmittersData, ThrowOnError>) => { return (options?.client ?? client).get<GetSubmittersResponse, GetSubmittersError, ThrowOnError>({
    ...options,
    url: '/submitters'
}); };

/**
 * Update template documents
 * The API endpoint allows you to add, remove or replace documents in the template with provided PDF/DOCX file or HTML content.
 */
export const addDocumentToTemplate = <ThrowOnError extends boolean = false>(options: Options<AddDocumentToTemplateData, ThrowOnError>) => { return (options?.client ?? client).put<AddDocumentToTemplateResponse, AddDocumentToTemplateError, ThrowOnError>({
    ...options,
    url: '/templates/{id}/documents'
}); };

/**
 * Clone a template
 * The API endpoint allows you to clone existing template into a new template.
 */
export const cloneTemplate = <ThrowOnError extends boolean = false>(options: Options<CloneTemplateData, ThrowOnError>) => { return (options?.client ?? client).post<CloneTemplateResponse, CloneTemplateError, ThrowOnError>({
    ...options,
    url: '/templates/{id}/clone'
}); };

/**
 * Create a template from HTML
 * The API endpoint provides the functionality to seamlessly generate a PDF document template by utilizing the provided HTML content while incorporating pre-defined fields.<br><b>Related Guides</b><br><a href="https://www.docuseal.co/guides/create-pdf-document-fillable-form-with-html-api" class="link">Create PDF document fillable form with HTML</a>
 */
export const createTemplateFromHtml = <ThrowOnError extends boolean = false>(options: Options<CreateTemplateFromHtmlData, ThrowOnError>) => { return (options?.client ?? client).post<CreateTemplateFromHtmlResponse, CreateTemplateFromHtmlError, ThrowOnError>({
    ...options,
    url: '/templates/html'
}); };

/**
 * Create a template from Word DOCX
 * The API endpoint provides the functionality to create a fillable document template for existing Microsoft Word document. Use <code>{{Field Name;role=Signer1;type=date}}</code> text tags to define fillable fields in the document. See <a href="https://www.docuseal.co/examples/fieldtags.docx" target="_blank" class="link font-bold" >https://www.docuseal.co/examples/fieldtags.docx</a> for more text tag formats. Or specify the exact pixel coordinates of the document fields using `fields` param.<br><b>Related Guides</b><br><a href="https://www.docuseal.co/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form" class="link">Use embedded text field tags to create a fillable form</a>
 *
 */
export const createTemplateFromDocx = <ThrowOnError extends boolean = false>(options: Options<CreateTemplateFromDocxData, ThrowOnError>) => { return (options?.client ?? client).post<CreateTemplateFromDocxResponse, CreateTemplateFromDocxError, ThrowOnError>({
    ...options,
    url: '/templates/docx'
}); };

/**
 * Create a template from existing PDF
 * The API endpoint provides the functionality to create a fillable document template for existing PDF file. Use <code>{{Field Name;role=Signer1;type=date}}</code> text tags to define fillable fields in the document. See <a href="https://www.docuseal.co/examples/fieldtags.pdf" target="_blank" class="link font-bold">https://www.docuseal.co/examples/fieldtags.pdf</a> for more text tag formats. Or specify the exact pixel coordinates of the document fields using `fields` param.<br><b>Related Guides</b><br><a href="https://www.docuseal.co/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form" class="link">Use embedded text field tags to create a fillable form</a>
 *
 */
export const createTemplateFromPdf = <ThrowOnError extends boolean = false>(options: Options<CreateTemplateFromPdfData, ThrowOnError>) => { return (options?.client ?? client).post<CreateTemplateFromPdfResponse, CreateTemplateFromPdfError, ThrowOnError>({
    ...options,
    url: '/templates/pdf'
}); };

/**
 * Merge templates
 * The API endpoint allows you to merge multiple templates with documents and fields into a new combined template.
 */
export const mergeTemplate = <ThrowOnError extends boolean = false>(options: Options<MergeTemplateData, ThrowOnError>) => { return (options?.client ?? client).post<MergeTemplateResponse, MergeTemplateError, ThrowOnError>({
    ...options,
    url: '/templates/merge'
}); };