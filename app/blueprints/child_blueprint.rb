# frozen_string_literal: true

# Serializer for children
class ChildBlueprint < Blueprinter::Base
  identifier :id

  view :illinois_dashboard do
    field :full_name
    association :business, blueprint: BusinessBlueprint, view: :dashboard
    association :approvals, blueprint: ApprovalBlueprint, view: :dashboard do |child|
      child.approvals.current
    end
    field :attendance_risk do |child|
      child.illinois_attendance_risk
    end
    field :attendance_rate do |child|
      child.illinois_attendance_rate
    end
    field :guaranteed_revenue do |child|
      child.illinois_guaranteed_revenue
    end
    field :potential_revenue do |child|
      child.illinois_potential_revenue
    end
    field :max_approved_revenue do |child|
      child.illinois_max_approved_revenue
    end
    field :as_of do
      '12/21/2020'
    end
    exclude :id
  end

  view :nebraska_dashboard do
    field :full_name
    association :business, blueprint: BusinessBlueprint, view: :dashboard
    association :approvals, blueprint: ApprovalBlueprint, view: :dashboard do |child|
      child.approvals.current
    end
    field :case_number do
      'case#1'
    end
    field :full_days do
      '14 of 15'
    end
    field :hours do
      '1 of 6.5'
    end
    field :absences do
      '1 of 5'
    end
    field :earned_revenue do
      1045.32
    end
    field :estimated_revenue do
      2022.14
    end
    field :transportation_revenue do
      '30 trips - $80.00'
    end
    field :as_of do
      '12/21/2020'
    end
    exclude :id
  end
end
