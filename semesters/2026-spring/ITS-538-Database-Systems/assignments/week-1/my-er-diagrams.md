# ER Diagram Reference — Lab 1: Interpreting Entity-Relationship Diagrams Using Dia

**Course**: ITS-538 Database Systems (Spring 2026)
**Student**: Srinath Jagarlamudi
**Purpose**: PlantUML reference for planning and visualizing all Lab 1 ER diagrams locally before building them in Dia on the vWorkstation virtual machine. This file is a personal reference tool — not a Blackboard submission.

**How to use**: Open in VS Code with the PlantUML extension for live preview, or paste each block into https://www.plantuml.com/plantuml/uml/ to verify rendering.

**VS Code setup** — The PlantUML extension requires a server. Add this to your `settings.json` (`Cmd+Shift+P` → "Open User Settings JSON"):
```json
"plantuml.server": "https://www.plantuml.com/plantuml"
```

---

## Part 1: Student Entity

Single entity with varied attribute types (no relationships yet).

| Attribute | Type |
|-----------|------|
| `studentID` | Primary key |
| `credits` | Single-valued |
| `major` | Multi-valued |
| `name` → `firstName`, `lastName` | Composite |
| `age` | Derived |

```plantuml
@startuml Part1_Student_Entity
skinparam linetype ortho

entity "STUDENT" as student {
  * studentID : int <<PK>>
  --
  credits : int
  major : string [multi-valued]
  firstName : string
  lastName : string
  age : int [derived]
}

note right of student
  Attribute type legend:
  [multi-valued] = double oval in Dia
  [derived] = dashed oval in Dia
  name (firstName + lastName) = composite in Dia
  * prefix = primary key (underlined oval in Dia)
end note
@enduml
```

---

## Part 2: Enrollment ERD (with Relationships)

Adds a `COURSE` entity and an `ENROLLMENT` relationship-entity. Student has **total participation** in ENROLLMENT (every student must be enrolled in at least one course).

| Element | Detail |
|---------|--------|
| `COURSE` | Strong entity, `courseID` PK |
| `ENROLLMENT` | Relationship with `grade` attribute |
| Cardinality | Student (n, total) ↔ ENROLLMENT ↔ (m) Course |
| Total participation | Double line on Student side in Dia |

```plantuml
@startuml Part2_Enrollment_ERD
skinparam linetype ortho

entity "STUDENT" as student {
  * studentID : int <<PK>>
  --
  credits : int
  major : string [multi-valued]
  firstName : string
  lastName : string
  age : int [derived]
}

entity "COURSE" as course {
  * courseID : string <<PK>>
}

entity "ENROLLMENT" as enrollment {
  grade : string
}

student }|--|{ enrollment : "n (total)"
enrollment }|--|{ course : "m"

note bottom of student
  Total participation = double line in Dia
  (every student must be enrolled in at least one course)
end note

note right of enrollment
  ENROLLMENT is a relationship-entity
  (diamond with rectangle in Dia)
  grade is an attribute of the relationship
end note
@enduml
```

---

## Part 3: Full ERD (with Weak Entity)

Builds on Part 2 by adding `SECTION` as a weak entity identified by `COURSE`.

| Element | Detail |
|---------|--------|
| `SECTION` | Weak entity, `sectionLetter` weak key |
| `HasSection` | Identifying relationship (double diamond in Dia) |
| Cardinality | Course (1) → HasSection → (n, total) Section |
| Total participation | Every section must belong to exactly one course |

```plantuml
@startuml Part3_Full_ERD
skinparam linetype ortho

entity "STUDENT" as student {
  * studentID : int <<PK>>
  --
  credits : int
  major : string [multi-valued]
  firstName : string
  lastName : string
  age : int [derived]
}

entity "COURSE" as course {
  * courseID : string <<PK>>
}

entity "ENROLLMENT" as enrollment {
  grade : string
}

entity "SECTION" as section <<weak>> {
  ~ sectionLetter : char [weak key]
}

student }|--|{ enrollment : "n (total)"
enrollment }|--|{ course : "m"
course ||--|{ section : "HasSection\n1 to n (total)"

note right of section
  SECTION is a weak entity:
  - Double rectangle in Dia
  - Identified by COURSE via HasSection
  - sectionLetter is the weak (partial) key
    (dashed-underline oval in Dia)
  - HasSection is an identifying relationship
    (double diamond in Dia)
  - Section has total participation (double line in Dia)
end note
@enduml
```

---

## Challenge: Catering Application ERD

Full ERD for a catering company application, derived from the challenge question.

### Entities and Attributes

| Entity | Type | Key | Notable Attributes |
|--------|------|-----|--------------------|
| `STAFF` | Strong | `sID` | `title`, `roles` (multi-valued), `name` (composite) |
| `CORPORATION` | Strong | `corpID` | — |
| `EVENT` | Strong | `eventID` | — |
| `VENUE` | Strong | `venueID` | — |
| `OFFERING` | Weak | `offeringKey` (weak key) | — |

### Relationships

| Relationship | Type | Entities Involved | Attributes | Cardinality |
|-------------|------|-------------------|------------|-------------|
| `Manages` | Binary | Staff ↔ Event | `savings` (derived) | Many-to-many |
| `Schedules` | Identifying | Event ↔ Offering | — | 1:n, Offering total |
| `Caters` | Ternary | Corporation + Staff + Event | — | See note |
| `HeldAt` | Binary | Event ↔ Venue | — | Many-to-one |

> **PlantUML Limitation — Ternary Relationship**: PlantUML does not support true ternary relationships. The `Caters` relationship (Corporation + Staff + Event) is split into two binary relationships below for visualization. In Dia, draw a single diamond connected to all three entities.

```plantuml
@startuml Challenge_Catering_ERD
skinparam linetype ortho

' Strong entities
entity "STAFF" as staff {
  * sID : int <<PK>>
  --
  title : string
  roles : string [multi-valued]
  firstName : string [composite: name]
  lastName : string [composite: name]
}

entity "CORPORATION" as corp {
  * corpID : int <<PK>>
}

entity "EVENT" as event {
  * eventID : int <<PK>>
}

entity "VENUE" as venue {
  * venueID : int <<PK>>
}

' Weak entity
entity "OFFERING" as offering <<weak>> {
  ~ offeringKey : string [weak key]
}

' Manages relationship (binary, staff ↔ event)
entity "MANAGES" as manages {
  savings : decimal [derived]
}

' Caters relationship - split into 2 binary (PlantUML limitation)
entity "CATERS\n(ternary→binary)" as caters {
}

' Relationships
staff }|--|{ manages : "n"
manages }|--|{ event : "m"

event ||--|{ offering : "Schedules\n(identifying)\n1 to n (total)"

staff }|--|{ caters : "participates"
corp }|--|{ caters : "participates"
caters }|--|{ event : "for event"

event }|--|| venue : "HeldAt\nn to 1"

note top of manages
  savings is a derived attribute
  on the Manages relationship
  (dashed oval attached to diamond in Dia)
end note

note bottom of offering
  OFFERING is a weak entity:
  - Double rectangle in Dia
  - Identified by EVENT via Schedules
  - offeringKey is the weak (partial) key
  - Schedules is an identifying relationship
    (double diamond in Dia)
  - Offering has total participation
end note

note right of caters
  TERNARY RELATIONSHIP NOTE:
  In Dia, draw a single Caters diamond
  connected to Corporation, Staff, AND Event.
  PlantUML cannot represent ternary relationships
  natively, so this is split into two binary
  relationships for visualization only.
end note
@enduml
```

---

## Challenge Part 1: Store ERD

Extracted from the lab PDF (`StoreConceptualDesign.jpg`). See original image: `store-erd.png`.

### Entities and Attributes

| Entity | Type | Key | Notable Attributes |
|--------|------|-----|--------------------|
| `STORE` | Strong | `storeID` (PK) | `storeName` |
| `BRANCH` | **Weak** | `branchNum` (weak key) | `location` |
| `EMPLOYEE` | Strong | `eCode` (PK) | `eName` (also underlined — possible design issue) |
| `ITEM` | Strong | `itemID` (PK) | `description` (composite: `short`, `long`) |

### Relationships

| Relationship | Type | Entities Involved | Attributes | Cardinality |
|-------------|------|-------------------|------------|-------------|
| `BelongsTo` | Identifying (double diamond) | Store ↔ Branch | — | Store(1) → Branch(n), Branch total participation |
| `Employs` | Binary | Store ↔ Employee | — | Store(1) → Employee(n) |
| `Manages` | Binary | Employee ↔ Branch | — | Employee(1) → Branch(m) |
| `Sells` | Binary | Branch ↔ Item | `salePrice` | Branch(m) ↔ Item(n) |
| `EarnsCommission` | **Ternary** | Branch + Employee + Item | `rate` | — |

> **Design Note**: `eName` on EMPLOYEE appears underlined in the diagram alongside `eCode`. An entity should have only one primary key. This may be a design error — `eCode` is likely the intended PK and `eName` may be incorrectly underlined.

> **Ternary Note**: `EarnsCommission` is a ternary relationship (Branch + Employee + Item). PlantUML splits it into binary relationships below. In Dia, draw a single diamond connected to all three entities.

```plantuml
@startuml Challenge_Store_ERD
skinparam linetype ortho

entity "STORE" as store {
  * storeID : int <<PK>>
  --
  storeName : string
}

entity "BRANCH" as branch <<weak>> {
  ~ branchNum : int [weak key]
  --
  location : string
}

entity "EMPLOYEE" as employee {
  * eCode : string <<PK>>
  --
  eName : string [note: also underlined in original]
}

entity "ITEM" as item {
  * itemID : int <<PK>>
  --
  short : string [composite: description]
  long : string [composite: description]
}

' Sells relationship (with salePrice attribute on relationship)
entity "SELLS" as sells {
  salePrice : decimal
}

' EarnsCommission ternary — split into binary for PlantUML
entity "EARNS_COMMISSION\n(ternary→binary)" as earns {
  rate : decimal
}

store ||--|{ branch : "BelongsTo\n(identifying)\n1 to n (total)"
store ||--|{ employee : "Employs\n1 to n"
employee ||--|{ branch : "Manages\n1 to m"

branch }|--|{ sells : "m"
sells }|--|{ item : "n"

branch }|--|{ earns : "participates"
employee }|--|{ earns : "participates"
earns }|--|{ item : "participates"

note right of branch
  BRANCH is a weak entity:
  - Double rectangle in Dia
  - Identified by STORE via BelongsTo
  - branchNum is the weak key
  - BelongsTo is identifying (double diamond in Dia)
  - Branch has total participation (double line in Dia)
end note

note bottom of sells
  salePrice is an attribute on the Sells relationship
  (oval attached to the diamond in Dia)
end note

note right of earns
  TERNARY RELATIONSHIP:
  In Dia, draw a single EarnsCommission diamond
  connected to Branch, Employee, AND Item.
  rate is an attribute on the relationship.
  PlantUML splits this into binary for visualization.
end note
@enduml
```

---

## Notation Legend

| ER Concept | PlantUML Representation | Dia Representation |
|------------|------------------------|-------------------|
| Primary key | `*` prefix + `<<PK>>` tag | Underlined oval |
| Weak (partial) key | `~` prefix + `[weak key]` comment | Dashed-underline oval |
| Single-valued attribute | Plain attribute line | Single oval |
| Multi-valued attribute | `[multi-valued]` comment | Double oval |
| Derived attribute | `[derived]` comment | Dashed oval |
| Composite attribute | `[composite: name]` comment | Oval connected to sub-ovals |
| Strong entity | `entity` keyword | Single rectangle |
| Weak entity | `entity <<weak>>` stereotype | Double rectangle |
| Regular relationship | Single line between entities | Single diamond |
| Identifying relationship | Single line (annotated in note) | Double diamond |
| Total participation | `}\|` in cardinality notation | Double line on entity side |
| Partial participation | `\|` in cardinality notation | Single line on entity side |
| One (cardinality) | `\|` on the "one" side | `1` near entity |
| Many (cardinality) | `{` on the "many" side | `n` or `m` near entity |
| Attribute on relationship | Separate entity block (limitation) | Oval attached to diamond |
| Ternary relationship | Split into 2 binary (limitation) | Single diamond, 3 lines |

### PlantUML Cardinality Quick Reference

| Notation | Meaning |
|----------|---------|
| `\|\|--\|\|` | One-to-one (both mandatory) |
| `\|\|--|{` | One-to-many (left mandatory) |
| `}|--|{` | Many-to-many (both mandatory / total) |
| `\|o--o\|` | One-to-one (both optional) |
| `\|o--|{` | One-to-many (left optional) |

---

## Checklist: Parts to Build in Dia

Use this checklist when working on the vWorkstation virtual machine:

- [ ] **Part 1** — Student entity with all 5 attribute types (PK, single, multi-valued, composite, derived)
- [ ] **Part 2** — Add Course entity + Enrollment relationship-entity with `grade` attribute; set total participation on Student side
- [ ] **Part 3** — Add Section weak entity + HasSection identifying relationship; set total participation on Section side
- [ ] **Challenge Store ERD** — Analyze the Store ERD (see `store-erd.png` and PlantUML above); note the possible `eName` design issue
- [ ] **Challenge Catering ERD** — Build full catering ERD with all entities, weak entity, relationships, ternary Caters relationship
