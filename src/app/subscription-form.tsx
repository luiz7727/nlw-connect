'use client'

import Button from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import {
  type createSubscriptionFormType,
  createSubscriptionSchema,
} from '@/schema/create-subscription-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Loader2, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<createSubscriptionFormType>({
    resolver: zodResolver(createSubscriptionSchema),
  })

  function onSubscribe(data: createSubscriptionFormType) {}

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>

          <InputField
            {...register('name')}
            type="text"
            placeholder="Nome Completo"
          />
        </InputRoot>

        {errors.name && (
          <p className="text-danger font-semibold text-xs">
            {errors.name.message}
          </p>
        )}

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>

          <InputField
            {...register('email')}
            type="email"
            placeholder="E-mail"
          />
        </InputRoot>

        {errors.email && (
          <p className="text-danger font-semibold text-xs">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button type="submit">
        {isSubmitting ? (
          <Loader2 className="animate-spin size-5" />
        ) : (
          <>
            Confirmar
            <ArrowRight className="size-6" />
          </>
        )}
      </Button>
    </form>
  )
}
