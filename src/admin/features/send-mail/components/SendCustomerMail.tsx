import { Box, Button, Icon } from '@admin-bro/design-system';
import React, { FC, useState } from 'react';
import {
  ActionProps,
  ApiClient,
  BasePropertyComponent,
  PropertyJSON,
  useNotice,
  ViewHelpers,
} from 'admin-bro';
import { useHistory } from 'react-router';

const SendCustomerMail: FC<ActionProps> = ({ resource }) => {
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState('');
  const sendNotice = useNotice();
  const history = useHistory();

  const sendMail = async () => {
    const formData = new FormData();
    formData.set('content', content);
    formData.set('subject', subject);

    const recordIds = (
      new URLSearchParams(location.search).get('recordIds') ?? ''
    ).split(',');

    await new ApiClient().bulkAction({
      actionName: 'sendMail',
      recordIds,
      resourceId: resource.id,
      method: 'POST',
      data: formData,
    });

    sendNotice({ type: 'success', message: 'Emails sent!' });
    await history.push(
      new ViewHelpers().resourceUrl({ resourceId: resource.id })
    );
  };

  return (
    <Box width={1 / 2} mx="auto" bg="white" p="xxl">
      <BasePropertyComponent
        resource={resource}
        where={'edit'}
        property={titleProperty}
        onChange={(propertyOrRecord, value) => {
          setSubject(value);
        }}
        record={getRecord({ content, subject })}
      />
      <BasePropertyComponent
        resource={resource}
        where={'edit'}
        property={property}
        onChange={(propertyOrRecord, value) => {
          setContent(value);
        }}
        record={getRecord({ content, subject })}
      />
      <Button onClick={sendMail} style={{ width: '100%' }} variant="primary">
        <Icon icon="Email" />
        Send
      </Button>
    </Box>
  );
};

const property = {
  name: 'Content',
  type: 'richtext',
  label: 'Content',
} as PropertyJSON;

const titleProperty = {
  name: 'Subject',
  type: 'string',
  label: 'Subject',
} as PropertyJSON;

const getRecord = ({ content, subject }) => ({
  title: 'Email content',
  params: { content, subject },
  errors: {},
  id: 'id',
  recordActions: [],
  bulkActions: [],
  populated: {},
});

export default SendCustomerMail;
