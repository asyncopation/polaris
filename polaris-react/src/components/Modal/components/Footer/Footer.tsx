import React from 'react';

import type {ComplexAction} from '../../../../types';
import {buttonsFrom} from '../../../Button';
import {Box} from '../../../Box';
import {HorizontalStack} from '../../../HorizontalStack';
import {useFeatures} from '../../../../utilities/features';

export interface FooterProps {
  /** Primary action */
  primaryAction?: ComplexAction;
  /** Collection of secondary actions */
  secondaryActions?: ComplexAction[];
  /** The content to display inside modal */
  children?: React.ReactNode;
}

export function Footer({
  primaryAction,
  secondaryActions,
  children,
}: FooterProps) {
  const {polarisSummerEditions2023} = useFeatures();

  const primaryActionButton =
    (primaryAction && buttonsFrom(primaryAction, {primary: true})) || null;
  const secondaryActionButtons =
    (secondaryActions && buttonsFrom(secondaryActions)) || null;
  const actions =
    primaryActionButton || secondaryActionButtons ? (
      <HorizontalStack gap="2">
        {secondaryActionButtons}
        {primaryActionButton}
      </HorizontalStack>
    ) : null;

  return (
    <HorizontalStack gap="4" blockAlign="center">
      <Box
        borderColor="border-subdued"
        borderBlockStartWidth={polarisSummerEditions2023 ? undefined : '1'}
        minHeight="var(--p-space-16)"
        padding="4"
        paddingInlineStart="5"
        paddingInlineEnd="5"
        width="100%"
      >
        <HorizontalStack gap="4" blockAlign="center" align="space-between">
          <Box>{children}</Box>
          {actions}
        </HorizontalStack>
      </Box>
    </HorizontalStack>
  );
}
