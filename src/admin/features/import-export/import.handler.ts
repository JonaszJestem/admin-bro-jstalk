import { getFileFromRequest, getImporterByFileName } from './utils';
import { ActionHandler, ActionResponse, UploadedFile } from 'admin-bro';
import util from 'util';
import fs from 'fs';

const readFile = util.promisify(fs.readFile);

export const importHandler: ActionHandler<ActionResponse> = async (
  request,
  response,
  context
) => {
  const file = getFileFromRequest(request);
  const importer = getImporterByFileName(file.name);

  const fileContent = await readFile((file as any).path);
  await importer(fileContent.toString(), context.resource);

  return {};
};
