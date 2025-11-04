import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { toast } from "sonner";
import { 
  getProjects, 
  saveProjects, 
  deleteProject, 
  resetToDefault, 
  exportProjects, 
  importProjects,
  type Project 
} from "../lib/projectsData";
import { Trash2, Edit, Download, Upload, RotateCcw, Plus, X, LogOut } from "lucide-react";

interface AdminProps {
  onClose: () => void;
}

export function Admin({ onClose }: AdminProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<Project>>({
    title: "",
    category: "",
    type: "ART",
    year: new Date().getFullYear().toString(),
    description: "",
    images: [],
    role: "",
    challenge: "",
    concept: "",
    process: "",
    techStack: [],
    features: [],
    outcomes: "",
  });

  const [imageInput, setImageInput] = useState("");
  const [techStackInput, setTechStackInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    setProjects(getProjects());
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setIsCreating(true);
    setEditingProject(null);
    setFormData({
      title: "",
      category: "",
      type: "ART",
      year: new Date().getFullYear().toString(),
      description: "",
      images: [],
      role: "",
      challenge: "",
      concept: "",
      process: "",
      techStack: [],
      features: [],
      outcomes: "",
    });
  };

  const handleSave = () => {
    if (!formData.title || !formData.category || !formData.description) {
      toast.error("Please fill in required fields: Title, Category, Description");
      return;
    }

    if (formData.images?.length === 0) {
      toast.error("Please add at least one image");
      return;
    }

    const updatedProjects = [...projects];
    
    if (editingProject) {
      const index = updatedProjects.findIndex(p => p.id === editingProject.id);
      updatedProjects[index] = { ...formData, id: editingProject.id } as Project;
      toast.success("Project updated successfully!");
    } else {
      const maxId = updatedProjects.reduce((max, p) => Math.max(max, p.id), 0);
      updatedProjects.push({ ...formData, id: maxId + 1 } as Project);
      toast.success("Project created successfully!");
    }

    saveProjects(updatedProjects);
    loadProjects();
    setEditingProject(null);
    setIsCreating(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
      loadProjects();
      toast.success("Project deleted successfully!");
    }
  };

  const handleExport = () => {
    const json = exportProjects();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-projects-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Projects exported successfully!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const json = event.target?.result as string;
      if (importProjects(json)) {
        loadProjects();
        toast.success("Projects imported successfully!");
      } else {
        toast.error("Failed to import projects. Invalid JSON format.");
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset to default projects? This will delete all custom projects.")) {
      resetToDefault();
      loadProjects();
      toast.success("Projects reset to default!");
    }
  };

  const addImage = () => {
    if (imageInput.trim()) {
      setFormData({
        ...formData,
        images: [...(formData.images || []), imageInput.trim()],
      });
      setImageInput("");
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images?.filter((_, i) => i !== index) || [],
    });
  };

  const addTechStack = () => {
    if (techStackInput.trim()) {
      setFormData({
        ...formData,
        techStack: [...(formData.techStack || []), techStackInput.trim()],
      });
      setTechStackInput("");
    }
  };

  const removeTechStack = (index: number) => {
    setFormData({
      ...formData,
      techStack: formData.techStack?.filter((_, i) => i !== index) || [],
    });
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...(formData.features || []), featureInput.trim()],
      });
      setFeatureInput("");
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features?.filter((_, i) => i !== index) || [],
    });
  };

  const showForm = editingProject || isCreating;

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl">ADMIN PANEL</h1>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <label>
              <Button variant="outline" asChild>
                <span>
                  <Upload className="mr-2 h-4 w-4" />
                  Import
                </span>
              </Button>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button variant="outline" onClick={onClose}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {!showForm ? (
          <div>
            {/* Create Button */}
            <Button onClick={handleCreate} className="mb-6">
              <Plus className="mr-2 h-4 w-4" />
              Create New Project
            </Button>

            {/* Projects List */}
            <div className="grid gap-4">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>
                          {project.category} • {project.type} • {project.year}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(project)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(project.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {project.images.length} image(s)
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl">
                {editingProject ? `Edit: ${editingProject.title}` : "Create New Project"}
              </h2>
              <Button variant="outline" onClick={() => {
                setEditingProject(null);
                setIsCreating(false);
              }}>
                Cancel
              </Button>
            </div>

            {/* Form */}
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="details">Details (DESIGN)</TabsTrigger>
              </TabsList>

              {/* Basic Info Tab */}
              <TabsContent value="basic" className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="PROJECT TITLE"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="IMMERSIVE INSTALLATION"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="type">Type *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value: "ART" | "DESIGN") =>
                          setFormData({ ...formData, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ART">ART</SelectItem>
                          <SelectItem value="DESIGN">DESIGN</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="year">Year *</Label>
                      <Input
                        id="year"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        placeholder="2024"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief project description..."
                      rows={6}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Images Tab */}
              <TabsContent value="images" className="space-y-4">
                <div>
                  <Label>Images *</Label>
                  <div className="flex gap-2 mb-4">
                    <Input
                      value={imageInput}
                      onChange={(e) => setImageInput(e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addImage())}
                    />
                    <Button type="button" onClick={addImage}>
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.images?.map((img, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 border rounded">
                        <span className="text-sm flex-1 truncate">{img}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Details Tab */}
              <TabsContent value="details" className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  These fields are optional and typically used for DESIGN projects
                </p>

                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Lead Designer & Developer"
                  />
                </div>

                <div>
                  <Label htmlFor="challenge">Challenge</Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder="Problem statement..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="concept">Concept</Label>
                  <Textarea
                    id="concept"
                    value={formData.concept}
                    onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                    placeholder="Solution concept..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="process">Process</Label>
                  <Textarea
                    id="process"
                    value={formData.process}
                    onChange={(e) => setFormData({ ...formData, process: e.target.value })}
                    placeholder="Design process..."
                    rows={6}
                  />
                </div>

                <div>
                  <Label>Tech Stack</Label>
                  <div className="flex gap-2 mb-4">
                    <Input
                      value={techStackInput}
                      onChange={(e) => setTechStackInput(e.target.value)}
                      placeholder="Unity AR Foundation"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechStack())}
                    />
                    <Button type="button" onClick={addTechStack}>
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.techStack?.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 border rounded">
                        <span className="text-sm flex-1">{tech}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeTechStack(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Features</Label>
                  <div className="flex gap-2 mb-4">
                    <Input
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      placeholder="Feature description"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                    />
                    <Button type="button" onClick={addFeature}>
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.features?.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 border rounded">
                        <span className="text-sm flex-1">{feature}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFeature(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="outcomes">Outcomes</Label>
                  <Textarea
                    id="outcomes"
                    value={formData.outcomes}
                    onChange={(e) => setFormData({ ...formData, outcomes: e.target.value })}
                    placeholder="Project results and impact..."
                    rows={4}
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <Button onClick={handleSave} size="lg">
                {editingProject ? "Update Project" : "Create Project"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
