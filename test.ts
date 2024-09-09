import { SubmissionsApi, SubmittersApi, TemplatesApi } from "./api";

const docuseal = {
    submissions: new SubmissionsApi(),
    submitters: new SubmittersApi(),
    templates: new TemplatesApi(),
}

const externalId = "";

const templateId = await docuseal.templates
    .getTemplates()
    .then(r => r.data?.find(t => t.id)?.id);

if (!templateId) throw new Error();

docuseal.submitters.getSubmitters()

const thing = await docuseal.submissions.createSubmission({
    templateId,
    submitters: [{
        email: "",
    }]
})

docuseal.templates.createTemplateFromPdf({
    documents: []
})